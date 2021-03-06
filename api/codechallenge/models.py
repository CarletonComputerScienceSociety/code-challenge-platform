from django.db import models
from django.utils import timezone

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=30)
    start_time = models.DateTimeField(default=timezone.now)
    end_time = models.DateTimeField(default=timezone.now)
    # upload_to ?
    media_field = models.FileField(upload_to="event", null=True, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Author(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    email = models.EmailField(max_length=50)

    def __str__(self):
        return self.first_name + " " + self.last_name


class Question(models.Model):
    Difficulty_Type = models.TextChoices("Difficulty_Type", "HARD MEDIUM EASY")
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    body = models.TextField()
    description = models.CharField(max_length=50)
    format = models.CharField(max_length=20)
    difficulty = models.CharField(choices=Difficulty_Type.choices, max_length=10)
    expiration_time = models.DateTimeField()
    max_attempts = models.PositiveSmallIntegerField()
    categories = models.ManyToManyField(Category)
    modify_time = models.DateTimeField(auto_now=True)
    authors = models.ManyToManyField(Author)

    def __str__(self):
        return "Q"+ str(self.id)+": "+ self.title

    def get_body(self):
        return self.body[0:25]+"..."

## many to many fields
    def get_categories(self):
        return "\n".join([c.name for c in self.categories.all()])

    def get_authors(self):
        return "\n".join([a.first_name +" "+ a.last_name for a in self.authors.all()])


class Submission(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.TextField(max_length=100)
    submission_time = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(max_length=50)
    correct = models.BooleanField(blank=True)

    def __str__(self):
        return str(self.id)


class WinningSubmission(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    submission = models.ForeignKey(Submission, on_delete=models.CASCADE)


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    body = models.TextField()

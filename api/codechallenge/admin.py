from django.contrib import admin
from django.db.models import fields
from .models import (
    Event,
    Question,
    Submission,
    WinningSubmission,
    Answer,
    Category,
    Author,
)

# Register your models here.
@admin.register(Category)
class CategoryResource(admin.ModelAdmin):
    list_display = ["name"]


@admin.register(Author)
class AuthorResource(admin.ModelAdmin):
    list_display = ["first_name", "last_name", "email"]


@admin.register(Event)
class EventResource(admin.ModelAdmin):
    list_display = [
        "id",
        "title",
        "start_time",
        "end_time",
        "media_field",
        "description",
    ]


@admin.register(Question)
class QuestionResource(admin.ModelAdmin):
    list_display = (
        "id",
        "event",
        "title",
        "get_body",
        "description",
        "format",
        "difficulty",
        "expiration_time",
        "max_attempts",
        "get_categories",
        "get_authors",
        "modify_time",
    )


@admin.register(Submission)
class SubmissionResource(admin.ModelAdmin):
    list_display = ["id", "submission_time", "question", "answer", "email", "correct"]


@admin.register(WinningSubmission)
class WinningSubmissionResource(admin.ModelAdmin):
    list_display = ["event", "submission"]


@admin.register(Answer)
class AnswerResource(admin.ModelAdmin):
    list_display = ["question", "body"]

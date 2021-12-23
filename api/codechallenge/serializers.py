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
from rest_framework import serializers
# from rest_polymorphic.serializers import PolymorphicSerializer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name"]

class AuthorSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = Author
        fields = ["first_name", "last_name", "email"]

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = [
            "id",
            "title",
            "description",
            "start_time",
            "end_time",
            "media_field",
        ]

class QuestionSerializer(serializers.ModelSerializer):
    event = EventSerializer(many=False, required=True)
    categories = CategorySerializer(many=True, required=True)
    authors = AuthorSerializer(many=True, required=True)
    class Meta:
        model = Question
        fields = [
            "id",
            "title",
            "event",
            "body",
            "description",
            "format",
            "difficulty",
            "expiration_time",
            "max_attempts",
            "categories",
            "modify_time",
            "authors",
        ]

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = [
            "id",
            "question",
            "answer",
            "submission_time",
            "email",
            "correct"
        ]
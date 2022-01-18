from django.core.checks.messages import Error
from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework import status, generics
from rest_framework.response import Response
from .models import *
from .serializers import *
from .paginations import *
from .validators import *
from django_filters import rest_framework as filters
from django_filters.rest_framework import DjangoFilterBackend
from uuid import UUID

# Create your views here.

# class EventFilter(filters.FilterSet):
#     id = filters.UUIDFilter(field_name="id")
#     title = filters.CharFilter(field_name="title")
#     start_time = filters.DateTimeFilter(field_name="start_time", lookup_expr="gte")
#     end_time = filters.DateTimeFilter(field_name="end_time", lookup_expr="lte")
#     organization = filters.ModelChoiceFilter(
#         field_name="organizations",
#         to_field_name="slug",
#         queryset=Organization.objects.all(),
#     )
#     category = filters.ModelChoiceFilter(
#         field_name="categories",
#         to_field_name="title",
#         queryset=Category.objects.all(),
#     )

#     class Meta:
#         model = Event
#         fields = ["id", "title", "start_time", "end_time", "organization", "category"]

# Events
class EventList(generics.GenericAPIView): 
    queryset = Event.objects.all().order_by("-start_time") # - means desc, new to old
    # this is for swagger
    serializer_class = EventSerializer

    pagination_class = CustomPagination
    # filter_backends = [DjangoFilterBackend]
    # filter_class = EventFilter

    def get(self, request):
        # get_queryset() Used by ListViews - determines the list of objects that you want to display.
        events = self.get_queryset()
        # events = self.filter_queryset(events)
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(events, request)
        serializer = EventSerializer(
            result_page, many=True, context={"request": request}
        )
        return Response(serializer.data, status=status.HTTP_200_OK)


# Details of selected event
class EventDetails(generics.RetrieveAPIView):
    serializer_class = EventSerializer

    def get(self, request, id):
        try:
            event = Event.objects.get(id=id)
            serializer = EventSerializer(event, many=False)
            final_data = {"data": serializer.data, "errors": None}
            return Response(final_data, status=status.HTTP_200_OK)
        except Event.DoesNotExist:
            final_data = {"data": {}, "errors": "Event not found"}
            return Response(final_data, status=status.HTTP_404_NOT_FOUND)

# Questions
class QuestionList(generics.GenericAPIView):  # List all job events, or create a new  event
    queryset = Question.objects.all().order_by("expiration_time")
    # this is for swagger
    serializer_class = QuestionSerializer

    pagination_class = CustomPagination
    # filter_backends = [DjangoFilterBackend]
    # filter_class = EventFilter

    def get(self, request):
        questions = self.get_queryset()
        # events = self.filter_queryset(events)
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(questions, request)
        serializer = QuestionSerializer(
            result_page, many=True, context={"request": request}
        )
        return Response(serializer.data, status=status.HTTP_200_OK)

# Details of selected question
class QuestionDetails(generics.RetrieveAPIView):
    serializer_class = QuestionSerializer

    def get(self, request, id):
        try:
            question = Question.objects.get(id=id)
            serializer = QuestionSerializer(question, many=False)
            final_data = {"data": serializer.data, "errors": None}
            return Response(final_data, status=status.HTTP_200_OK)
        except Question.DoesNotExist:
            final_data = {"data": {}, "errors": "Question not found"}
            return Response(final_data, status=status.HTTP_404_NOT_FOUND)




class SubmissionList(generics.GenericAPIView):
    serializer_class = SubmissionSerializer
    queryset = Submission.objects.all() 

    def post(self, request):
        data = request.data
 
        # serializer.is_valid: checks for if question_id exists, email format
        # raise_exception: will send 400 bad request
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
    
            try:
                validate_carleton_email(data["email"])
            except ValidationError:
                    return Response(
                        {"data": {}, "errors": "Invalid email domain, must be carleton.ca email."}, status=status.HTTP_404_NOT_FOUND
                    )
            # Need to check if submission has had correct submission before, do not save duplicate correct submissions
            submission_set = Submission.objects.filter(
                question=data["question"], email=data["email"]
            )
            for submission in submission_set:
                    if submission.correct:
                        return Response(
                            {"data": {}, "errors": "You have answered the question correctly"}, status=status.HTTP_409_CONFLICT
                        )

            serializer.save()

            answer_set = Answer.objects.filter(question=data["question"])
            data["correct"] = False

            for answer in answer_set:
                if data["answer"] == answer.body:
                        data["correct"] = True

            return Response(
                {"data": data, "errors": {}}, status=status.HTTP_201_CREATED
            )









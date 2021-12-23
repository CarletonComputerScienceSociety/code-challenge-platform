from rest_framework import pagination


class CustomPagination(pagination.PageNumberPagination):
    page_size = 3 #default number of items display per page
    page_size_query_param = "pagelimit"
    max_page_size = 50
    page_query_param = "page"

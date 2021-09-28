from django.urls.resolvers import URLPattern
from . import views
from django.urls import path

app_name = "djangoGuide"
urlpatterns = [
	path("", views.index, name="index"),
	path('<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
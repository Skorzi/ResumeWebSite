from django.urls.resolvers import URLPattern
from . import views
from django.urls import path

app_name = "djangoGuide"
urlpatterns = [
	path("", views.IndexView.as_view(), name="index"),
	path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    # ex: /polls/5/results/
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
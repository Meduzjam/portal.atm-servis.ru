from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.contrib.auth.models import User

# Create your views here.
class HomePageView(TemplateView):

    template_name = "index.html"

    def get_context_data(self, **kwargs):
        context = super(HomePageView, self).get_context_data(**kwargs)
        #context['alluser'] = User.objects.all()
        return context

def index(request, path=''):
    """
    Renders the Angular2 SPA
    """
    return render(request, 'index.html')
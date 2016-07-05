from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.contrib.auth.models import User

# Create your views here.
class TimesheetView(TemplateView):

    template_name = "timesheet.html"

    def get_context_data(self, **kwargs):
        context = super(TimesheetView, self).get_context_data(**kwargs)
        return context
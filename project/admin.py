from django.contrib import admin
from .models import *

class TaskAdmin(admin.ModelAdmin):
	list_display = ("name","parent.name")

admin.site.register(Project)
admin.site.register(Task,TaskAdmin)
admin.site.register(Plan)
admin.site.register(PlanTask)
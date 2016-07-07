from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import *

class TaskAdmin(admin.ModelAdmin):
	list_display = ("name","parent")

class TaskAdmin(MPTTModelAdmin):
    # specify pixel amount for this ModelAdmin only:
    mptt_level_indent = 20

admin.site.register(Project)
admin.site.register(Task,TaskAdmin)
admin.site.register(Plan)
admin.site.register(PlanTask)
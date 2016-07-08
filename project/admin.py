from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import *

class TaskAdmin(MPTTModelAdmin):
	# specify pixel amount for this ModelAdmin only:
	mptt_level_indent = 20

class ProjectPlanTaskInline(admin.TabularInline):
	model = ProjectPlan.task.through
	extra = 0
	min_num = 1
	verbose_name = 'задача'
	verbose_name_plural = 'задачи'


class PlanProjectInline(admin.TabularInline):
	model = ProjectPlan
	extra = 0
	min_num = 0
	verbose_name = 'проект'
	verbose_name_plural = 'проекты'


class ProjectPlanAdmin(admin.ModelAdmin):
	list_display = ("plan","project")

	inlines = [
		ProjectPlanTaskInline,
		]

class PlanAdmin(admin.ModelAdmin):
	list_display = ("year","department")

	inlines = [
		PlanProjectInline,
		]



admin.site.register(Project)
admin.site.register(Task,TaskAdmin)
admin.site.register(Plan,PlanAdmin)
admin.site.register(ProjectPlan,ProjectPlanAdmin)
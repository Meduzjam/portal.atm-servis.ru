from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import *

class TaskAdmin(admin.ModelAdmin):
	list_display = ("name","parent")

class TaskAdmin(MPTTModelAdmin):
	# specify pixel amount for this ModelAdmin only:
	mptt_level_indent = 20


class PlanTaskInline(admin.TabularInline):
	model = PlanTask.task.through
	extra = 0
	min_num = 1
	verbose_name = 'задача'
	verbose_name_plural = 'задачи'

class PlanTaskAdmin(admin.ModelAdmin):
	list_display = ("plan","project")

	inlines = [
		PlanTaskInline,
		PositionsInline,
		]


admin.site.register(Project)
admin.site.register(Task,TaskAdmin)
admin.site.register(Plan)
admin.site.register(PlanTask,PlanTaskAdmin)
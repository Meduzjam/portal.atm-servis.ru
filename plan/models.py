from django.db import models
from django.contrib.auth.models import User
from mptt.models import MPTTModel, TreeForeignKey
import datetime

class Project(models.Model):
	class Meta:
		db_table = 'prj_project'
		verbose_name = 'проект'
		verbose_name_plural = 'проекты'

	name = models.CharField(
		max_length=255,
		verbose_name='название',
	)

	def __str__(self):
		return self.name	

class Task(MPTTModel):
	class Meta:
		db_table = 'prj_task'
		verbose_name = 'задача'
		verbose_name_plural = 'задачи'

	name = models.CharField(
		max_length=255,
		verbose_name='название',
	)

	parent = TreeForeignKey(
		'self', 
		null=True, 
		blank=True, 
		related_name='children', 
		db_index=True
	)
	
	def __str__(self):
		return self.name

class Plan(models.Model):
	class Meta:
		db_table = 'prj_plan'
		verbose_name = 'план'
		verbose_name_plural = 'план'
		unique_together = (('department','year'),)

	PROGRAM = 'PG'
	DESIGN = 'DE'
	IMPLEMENT = 'IM'

	DEPARTMENT_CHOICES = (
		(PROGRAM, 'Разработка ПО'),
		(DESIGN, 'Проектирование'),
		(IMPLEMENT, 'Внедрение'),
	)

	department = models.CharField(
		verbose_name='отдел',
		max_length=2,
		choices=DEPARTMENT_CHOICES, 
		default=PROGRAM,
	)

	YEAR_CHOICES = [(r,r) for r in range(datetime.date.today().year, datetime.date.today().year+5)]
	
	year = models.IntegerField(
		verbose_name='год',
		choices=YEAR_CHOICES, 
		default=datetime.date.today().year+1,
	)

	def __str__(self):
		return self.department + str(self.year)


class ProjectPlan(models.Model):
	class Meta:
		db_table = 'prj_project_plan'
		verbose_name = 'план проекта'
		verbose_name_plural = 'план проектов'
		unique_together = (('plan','project'),)

	plan = models.ForeignKey(
		Plan,
		verbose_name='план',
		on_delete=models.CASCADE,
	)

	project = models.ForeignKey(
		Project,
		verbose_name='проект',
		on_delete=models.CASCADE,
	)

	task = models.ManyToManyField(
		Task,
		through = 'PlanTaskOwner',
		through_fields=('projectplan', 'task'),
		verbose_name='задачи',
	)
	
class PlanTaskOwner(models.Model):
	class Meta:
		db_table = 'prj_project_plan_task'
		verbose_name = 'задача плана'
		verbose_name_plural = 'задачи плана'
		unique_together = (('projectplan','task','owner'),)

	NEW = 0
	INPROGRESS = 1
	CANCEL = 2
	COMPLETE =3
	CLOSED = 4

	TS_CHOICES = (
		(NEW, 'Ожидает исполнения'),
		(INPROGRESS, 'В работе'),
		(CANCEL, 'Отменена'),
		(COMPLETE, 'Ожидает подтверждения'),
		(CLOSED, 'Завершена'),
	)

	projectplan = models.ForeignKey(
		ProjectPlan, 
		verbose_name = 'проект плана',
		on_delete=models.CASCADE,
	)
	task = models.ForeignKey(
		Task, 
		verbose_name = 'задача',
		on_delete=models.CASCADE,
	)

	owner = models.ForeignKey(
		User, 
		verbose_name = 'ответственный',
		on_delete=models.PROTECT,
	)

	status = models.SmallIntegerField(
		verbose_name='статус задачи',
		choices=TS_CHOICES,
		default=NEW,
	)

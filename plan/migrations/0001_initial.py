# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-29 07:31
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.db.models.manager
import mptt.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.CharField(choices=[('PG', 'Разработка ПО'), ('DE', 'Проектирование'), ('IM', 'Внедрение')], default='PG', max_length=2, verbose_name='отдел')),
                ('year', models.IntegerField(choices=[(2016, 2016), (2017, 2017), (2018, 2018), (2019, 2019), (2020, 2020)], default=2017, verbose_name='год')),
            ],
            options={
                'verbose_name_plural': 'план',
                'verbose_name': 'план',
                'db_table': 'prj_plan',
            },
        ),
        migrations.CreateModel(
            name='PlanTaskOwner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.SmallIntegerField(choices=[(0, 'Ожидает исполнения'), (1, 'В работе'), (2, 'Отменена'), (3, 'Ожидает подтверждения'), (4, 'Завершена')], default=0, verbose_name='статус задачи')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='ответственный')),
            ],
            options={
                'verbose_name_plural': 'задачи плана',
                'verbose_name': 'задача плана',
                'db_table': 'prj_project_plan_task',
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='название')),
            ],
            options={
                'verbose_name_plural': 'проекты',
                'verbose_name': 'проект',
                'db_table': 'prj_project',
            },
        ),
        migrations.CreateModel(
            name='ProjectPlan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plan.Plan', verbose_name='план')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plan.Project', verbose_name='проект')),
            ],
            options={
                'verbose_name_plural': 'план проектов',
                'verbose_name': 'план проекта',
                'db_table': 'prj_project_plan',
            },
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='название')),
                ('lft', models.PositiveIntegerField(db_index=True, editable=False)),
                ('rght', models.PositiveIntegerField(db_index=True, editable=False)),
                ('tree_id', models.PositiveIntegerField(db_index=True, editable=False)),
                ('level', models.PositiveIntegerField(db_index=True, editable=False)),
                ('parent', mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='plan.Task')),
            ],
            options={
                'verbose_name_plural': 'задачи',
                'verbose_name': 'задача',
                'db_table': 'prj_task',
            },
            managers=[
                ('_default_manager', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            name='Task2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='название')),
                ('parent', mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='plan.Task2')),
            ],
            options={
                'verbose_name_plural': 'задачи2',
                'verbose_name': 'задача2',
                'db_table': 'prj_task2',
            },
        ),
        migrations.AddField(
            model_name='projectplan',
            name='task',
            field=models.ManyToManyField(through='plan.PlanTaskOwner', to='plan.Task2', verbose_name='задачи'),
        ),
        migrations.AddField(
            model_name='plantaskowner',
            name='projectplan',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plan.ProjectPlan', verbose_name='проект плана'),
        ),
        migrations.AddField(
            model_name='plantaskowner',
            name='task',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plan.Task2', verbose_name='задача'),
        ),
        migrations.AlterUniqueTogether(
            name='plan',
            unique_together=set([('department', 'year')]),
        ),
        migrations.AlterUniqueTogether(
            name='projectplan',
            unique_together=set([('plan', 'project')]),
        ),
        migrations.AlterUniqueTogether(
            name='plantaskowner',
            unique_together=set([('projectplan', 'task', 'owner')]),
        ),
    ]

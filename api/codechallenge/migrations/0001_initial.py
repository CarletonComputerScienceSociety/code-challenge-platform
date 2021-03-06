# Generated by Django 3.2.9 on 2021-11-30 18:08

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=25)),
                ('last_name', models.CharField(max_length=25)),
                ('email', models.EmailField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('start_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('end_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('media_field', models.FileField(blank=True, null=True, upload_to='event')),
                ('description', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('body', models.TextField()),
                ('description', models.CharField(max_length=50)),
                ('format', models.CharField(max_length=20)),
                ('difficulty', models.CharField(choices=[('HARD', 'Hard'), ('MEDIUM', 'Medium'), ('EASY', 'Easy')], max_length=10)),
                ('expiration_time', models.DateTimeField()),
                ('max_attempts', models.PositiveSmallIntegerField()),
                ('modify_time', models.DateTimeField(auto_now=True)),
                ('authors', models.ManyToManyField(to='codechallenge.Author')),
                ('categories', models.ManyToManyField(to='codechallenge.Category')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codechallenge.event')),
            ],
        ),
        migrations.CreateModel(
            name='Submission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.TextField(max_length=100)),
                ('submission_time', models.DateTimeField(auto_now_add=True)),
                ('email', models.EmailField(max_length=50)),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codechallenge.question')),
            ],
        ),
        migrations.CreateModel(
            name='WinningSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codechallenge.event')),
                ('submission', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codechallenge.submission')),
            ],
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField()),
                ('body2', models.TextField(blank=True)),
                ('body3', models.TextField(blank=True)),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codechallenge.question')),
            ],
        ),
    ]

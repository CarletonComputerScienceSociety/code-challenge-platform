# Generated by Django 3.2 on 2021-11-03 20:30

from django.db import migrations, models
import django.db.models.deletion


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
                ('email', models.EmailField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('start_time', models.DateTimeField(blank=True, null=True)),
                ('end_time', models.DateTimeField(blank=True, null=True)),
                ('media_field', models.FileField(blank=True, null=True, upload_to='event')),
                ('description', models.TextField(blank=True)),
                ('test', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('body', models.TextField(blank=True)),
                ('description', models.CharField(max_length=100)),
                ('format', models.CharField(max_length=50)),
                ('difficulty', models.CharField(choices=[('HARD', 'Hard'), ('MEDIUM', 'Medium'), ('EASY', 'Easy')], max_length=10)),
                ('expiration_time', models.DateTimeField(blank=True, null=True)),
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
                ('answer', models.CharField(max_length=100)),
                ('submission_time', models.DateTimeField(blank=True, null=True)),
                ('email', models.EmailField(max_length=100)),
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
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codechallenge.question')),
            ],
        ),
    ]
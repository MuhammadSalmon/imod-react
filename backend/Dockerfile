FROM python:3.8-apline
ENV PYTHONUNBUFFERED 1
WORKDIR /django
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
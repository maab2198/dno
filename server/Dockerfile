FROM python:3.4-alpine
MAINTAINER IwiKoRa
ADD . /server
WORKDIR /server

RUN pip install -r requirements.txt
COPY . /server

ENV FLASK_APP index.py
ENV FLASK_ENV development
EXPOSE  80
# CMD ["python","index.py"]
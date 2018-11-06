FROM python:3.4-alpine
MAINTAINER IwiKoRa
ADD . /server
WORKDIR /server

RUN pip install -r requirements.txt
COPY . /server
CMD ["flask", "index.py"]
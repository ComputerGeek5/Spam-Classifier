FROM openjdk:8
EXPOSE 8000:8000
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY ./target/Spam-Classifier-0.0.1-SNAPSHOT.jar SpamClassifier.jar
ENTRYPOINT ["java", "-jar", "SpamClassifier.jar"]
FROM openjdk:11

RUN apt update && apt install -y maven

COPY . .

RUN mvn clean install -DskipTests=true


FROM openjdk:11.0-bullseye

COPY --from=0 /target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "./app.jar"]


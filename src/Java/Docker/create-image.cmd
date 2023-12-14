docker build --no-cache -f SQL\Dockerfile.PostgreSql -t poslednyaya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t poslednyaya-java/app ../../..

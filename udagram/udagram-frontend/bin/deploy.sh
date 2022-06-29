
eb setenv POSTGRES_USERNAME=POSTGRES_USERNAME POSTGRES_PASSWORD=POSTGRES_PASSWORD POSTGRES_DB=POSTGRES_DB DB_PORT=DB_PORT POSTGRES_HOST=POSTGRES_HOST AWS_REGION=AWS_DEFAULT_REGION AWS_BUCKET=AWS_BUCKET URL=SERVER_URL JWT_SECRET=JWT_SECRET
aws s3 cp --recursive --acl public-read ./www s3://udagram493/
aws s3 cp --acl public-read --cache-control="max-age=0, no-cache, no-store, must-revalidate" ./www/index.html s3://udagram493/
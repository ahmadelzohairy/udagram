aws s3 sync --recursive --acl public-read ./www s3://ahmed-udagram/
aws s3 sync --acl public-read --cache-control="max-age=0, no-cache, no-store, must-revalidate" ./www/index.html s3://ahmed-udagram/
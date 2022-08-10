resource "aws_s3_bucket" "blog" {
  bucket = "blog"
  acl = "public-read"
}

resource "aws_s3_bucket" "artifacts" {
  bucket = "artifacts"
  acl = "public-read"
}
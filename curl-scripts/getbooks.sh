# sh curl-scripts/json/sign-in.sh

curl --include --request GET "https://wdi-library.herokuapp.com/books" \
  --data '{
    "books":{}
  }'

echo

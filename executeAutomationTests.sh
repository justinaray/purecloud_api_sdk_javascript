for test in ./spec/phantomjs/*.spec.js
do
    echo "Running $test"
    phantomjs --ssl-protocol=any $test
done

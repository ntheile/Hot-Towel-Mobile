$root = "~\Desktop\PhoneGapBuildApp$((get-date).toString('yyyy-MM-dd_HH-mm-ss'))"

md -Path $root
md -Path $root\src
md -Path $root\www
md -Path $root\www\js
md -Path $root\www\css
md -Path $root\www\images
Copy-Item ..\..\PhoneGap\* $root\src -recurse
Copy-Item ..\..\index.html $root\www
Copy-Item ..\..\config.xml $root\www
Copy-Item ..\..\js $root\www -recurse
Copy-Item ..\..\css $root\www -recurse
Copy-Item ..\..\images $root\www -recurse
Copy-Item config.js $root\www\js
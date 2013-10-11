﻿
$root = [Environment]::GetFolderPath("Desktop") + "\PhoneGapBuildApp$((get-date).toString('yyyy-MM-dd_HH-mm-ss'))"

md -Path $root
md -Path $root\src
md -Path $root\www
md -Path $root\www\Scripts
md -Path $root\www\css
md -Path $root\www\images
md -Path $root\www\App
Copy-Item ..\..\PhoneGap\* $root\src -recurse
Copy-Item ..\..\index.html $root\www
Copy-Item ..\..\config.xml $root\www
Copy-Item ..\..\Scripts $root\www -recurse
Copy-Item ..\..\css $root\www -recurse
Copy-Item ..\..\images $root\www -recurse
Copy-Item ..\..\Scripts $root\www -recurse
Copy-Item ..\..\App\main-built.js $root\www\App
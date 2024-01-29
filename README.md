# issueExpoCameraBarcodeReading

Public repo made to test an ExpoCamera barcode scanning issue

# Issue

To reproduce the problem, scan with Expo Camera a type-39 barcode with consecutive identical digits.
Example ```ERUUUUU3```.

https://barcode.tec-it.com/en/Code39?data=ERUUUUU3

onBarCodeScanned data result is randomly :
* ```ERUUUUU3``` 
* ```ERUUUU3```
* ```ERUUU3```.

This only happens when a barcode with identical consecutive numbers is scanned; a barcode like ```ER123456``` works perfectly.

Tested this barcode(```ERUUUUU3```) with zxing-js library and there is no problem ( on this testing web page https://zxing-js.github.io/library/examples/multi-camera/ )

# Video example 

https://github.com/odexvy/issueExpoCameraBarcodeReading/assets/12870342/067a3c56-b6f0-470f-93d8-05c5f1af65c5

# Build

Run ```yarn install``` and ```expo start``` to starts the project.

Scan the qr-code with ExpoGo app to launch th app

# API calls for Weather App


## Description
This is a repo of API call using `XMLHttpRequest`. 


## About this JS file
- Instantiate a new `XMLHttpRequest` object and storing it in a variable called `request`

- Store the URL in a `url` variable to make code a little easier to read.

- a function that listens for any changes to the `readyState` of the `XMLHttpRequest`
```
request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

```
Each time the `readyState` of this `XMLHttpRequest` changes, this function will be called. `getElements(response)` callback function will be called if the ready states is 4 and API call was completed successfully (200 status). Parsed `responseText` will be passed to `getElements` function.<br/><br/>

- the actual processing and sending of the request
```
 request.open("GET", url, true);
 request.send();
 ```
`open()` takes three arguments: the method of the request(GET, POST), the url, and a boolean for whether the request should be sync or not.<br/><br/>


- A function that will be used as a callback to display results in the browser




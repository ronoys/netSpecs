# netSpecs

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ronoys/netSpecs">
    <img src="images/icon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">netSpecs</h3>

  
</div>

![HTML][HTML1]
![CSS][CSS1]
![JavaScript][JavaScript1]

<!-- ABOUT THE PROJECT -->
## About The Project

netSpecs is a Google Chrome extension built on **Manifest V3**. It provides the user with information about both their device and network connection.
Commonly, when attempting to troubleshoot issues or seeking technological support, it is necessary for a user to know specifications relating directly
to their device. However, there is no universal method to determine many of these details as the way to check them varies on several factors including
the type of network connection and the operating system used. netSpecs conglomerates all these into a simple, easy-to-use platform that works **natively**
in the browser, **regardless of the device or OS**.

This extension relies on the **Network Information API** and specifically the navigator interface. The UI was built using HTML and CSS, while the API
calls and event handling is done using JavaScript. Below are some of the values retrieved from the API:

**Network:**
* `Latency:` The roundtrip time (in ms) taken by the network between a request and its corresponding response
* `Network Strength:` The network's effective bandwith (in Mbps)
* `Effective Connection Type:` The determination of the network's connection type based on network strength and latency
* `Service Workers:` Whether or not the service workers are enabled
* `Online:` Whether the device is connected to the internet
* `Cookies:` Whether cookies are enabled in the browser

**Device:**
* `Device Memory:` The approximate memory of the device (in Gb)
* `Battery Level:` The battery percentage of the device
* `Processor Cores:` The number of unique processor cores
* `User Agent:` JSON-formatted information about the device and network, including the Operating System



<!-- GETTING STARTED -->
## Getting Started

This extension can be loaded locally in Chrome as an unpacked extension. It uses Manifest v3 and requires version 88 or later of Chrome.

### Downloading the Extension

1. In this reponsitory, select the Green **`<> Code`** Button and Select **`Download ZIP`** from the drop-down.
2. Select the desired enclosing folder in the file explorer and save the ZIP file locally.
3. Extract the project files from the ZIP file.


### Importing into Chrome

1. Navigate to the Chrome extensions page
   ```
   chrome://extensions/
   ```
2. Select **`Load Unpacked`** in the top left.
3. Select the extracted project files from the file explorer
4. NetSpecs should now appear under the **`Extensions`** icon next to the search bar. Select NetSpecs to open the home view.



<!-- CONTRIBUTING -->
## Project Views

<img src="images/main.png" alt="main"  width="500" height="auto">
<img src="images/net.png" alt="net" width="500" height="auto">
<img src="images/dev.png" alt="dev" width="500" height="auto">



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- CONTACT -->
## About

Author: Ronoy Sarkar

Project Link: [https://github.com/ronoys/netSpecs](https://github.com/ronoys/netSpecs)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments



* <a href="https://www.flaticon.com/free-icons/data-research" title="data research icons">Data research icons created by Freepik - Flaticon</a>
* [README Template](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



[HTML1]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[CSS1]:  https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white
[JavaScript1]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black


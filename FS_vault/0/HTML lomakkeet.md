[[2023-09-05]]
#HTML #osa0
[Linkki sisältöön](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- Form = Lomake
- Antavat käyttäjälle keinon vuorovaikuttaa sivuston kanssa
	- Käyttäjä täyttää lomakkeen datalla
- Form controls = widgets. MIllainen form todella on, ie text box, radio button tms
	- minkälaista sisältöä form vastaanottaa = form validation
	- miltä lomake näyttää: onko siinä lappua/label
- `<form action="URL jonne lomakkeeseen liitetty data lähetetään" method="HTTP metodi joka määrittelee datan lähetyksen protokollan"> sisältö </form>`  on lomakkeen tägi
###### Esimerkki 
![[Pasted image 20230905151416.png]]
```
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
</form>
```
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
</form>
<li class="button">
  <button type="submit">Send your message</button>
</li>
- On kolmentyyppisiä nappeja; 
	- Reset, submit ja button-
	- Button napit voidaan ohjelmoida tekemään mitä tahansa.
##### Datan lähettäminen palvelimelle
Esimerkissä käytettyäisiin HTTP post metodia.

alla #CSS tyyli
````
form {
  /* Center the form on the page */
  margin: 0 auto;
  width: 400px;
  /* Form outline */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  /* Uniform size & alignment */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* To make sure that all text fields have the same font settings
     By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* Uniform text field size */
  width: 300px;
  box-sizing: border-box;

  /* Match form field borders */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* Additional highlight for focused elements */
  border-color: #000;
}

textarea {
  /* Align multiline text fields with their labels */
  vertical-align: top;

  /* Provide space to type some text */
  height: 5em;
}

.button {
  /* Align buttons with the text fields */
  padding-left: 90px; /* same size as the label elements */
}

button {
  /* This extra margin represent roughly the same space as the space
     between the labels and their text fields */
  margin-left: 0.5em;
}
````

![](../Pasted%20image%2020231012120040.png)
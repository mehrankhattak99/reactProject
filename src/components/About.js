import React from "react";
export default function About(){
    return(
        <p>Disabled buttons using the  element behave a bit different:

         don’t support the disabled attribute, so you must add the .disabled class to make it visually appear disabled.
        Some future-friendly styles are included to disable all pointer-events on anchor buttons.
        Disabled buttons using  should include the aria-disabled="true" attribute to indicate the state of the element to assistive technologies.
        Disabled buttons using  should not include the href attribute.</p>
    )
}
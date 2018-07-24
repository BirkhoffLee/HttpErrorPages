const _ejs = require('ejs');

// render template using given data
function renderTemplate(template, css, data={}){
  
    // assign css
    data.inlinecss = css;

    if (typeof data.hide_code == "undefined") {
        data.hide_code = false;
    }
    if (typeof data.cf_token == "undefined") {
        data.cf_token = "";
    }
    if (typeof data.message == "undefined") {
        data.message = "";
    }
    if (typeof data.title == "undefined") {
        data.title = "";
    }

    // render template - use custom escape function to handle linebreaks!
    return _ejs.render(template, data, {
        escape: function(text){
            if (!text){
                return '';
            }

            // apply generic escape function
            text = _ejs.escapeXML(text);

            // linebreaks
            text = text.replace(/\n/g, '<br />');

            return text;
        }
    });
}

module.exports = renderTemplate;
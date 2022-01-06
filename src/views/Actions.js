import eyeBlueIcon from "../assets/svg/eye_blue.js"
import downloadBlueIcon from "../assets/svg/download_blue.js"

export default (billUrl,filename, fileExtension) => {
  if(fileExtension != "pdf") {
    return (
      `<div class="icon-actions">
        <div id="eye" data-testid="icon-eye" data-bill-url=${billUrl}>
        ${eyeBlueIcon}
        </div>
      </div>`
    )
  }
  else {
    return (
      `<div class="icon-actions">
        <a href="/" id="download" data-testid="icon-download" download="${filename}" data-bill-url="${billUrl}">
        ${downloadBlueIcon}
        </a>
      </div>`
    )
  }
}
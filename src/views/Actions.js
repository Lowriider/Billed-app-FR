import eyeBlueIcon from "../assets/svg/eye_blue.js"
import downloadBlueIcon from "../assets/svg/download_blue.js"

export default (billUrl, fileExtension) => {
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
        <div id="download" data-testid="icon-download" data-bill-url=${billUrl}>
        ${downloadBlueIcon}
        </div>
      </div>`
    )
  }
}
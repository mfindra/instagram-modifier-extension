window.location.href = 'https://www.instagram.com';
console.log("Forwarded")

/**
 * function addLocationObserver(callback) {

  // Options for the observer (which mutations to observe)
  const config = { attributes: false, childList: true, subtree: false }

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback)

  // Start observing the target node for configured mutations
  observer.observe(document.body, config)
}

function observerCallback() {

  if (window.location.href.startsWith('https://instagram.com')) {
    initContentScript()
  }
}

addLocationObserver(observerCallback)
observerCallback()
 * 
 * 
 */
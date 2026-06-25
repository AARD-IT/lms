import React, { useEffect } from 'react'

export default function Modals() {
  useEffect(() => {
    const $ = window.$
    if (!$) return

    window.showRightModal = function (url, header) {
      $('#right-modal .modal-body').html(
        '<div class="modal-spinner-border"><div class="spinner-border text-secondary" role="status"></div></div>'
      )
      $('#right-modal .modal-title').html('...')
      $('#right-modal').modal('show', { backdrop: 'true' })

      $.ajax({
        url: url,
        success: function (response) {
          $('#right-modal .modal-title').html(header)
          $('#right-modal .modal-body').html(response)
        },
      })
    }

    window.ajaxModal = function (url, title, modalClasses = 'modal-md', animation = 'fade') {
      $('#ajaxModal .modal-dialog')
        .removeClass('modal-sm modal-md modal-lg modal-xl modal-xxl modal-fullscreen')
        .addClass(modalClasses)

      $('#ajaxModal').removeClass('fade').addClass(animation)
      $('#ajaxModal .modal-title').html(title)
      $('#ajaxModal').modal('show')

      $.ajax({
        type: 'get',
        url: url,
        success: function (response) {
          $('#ajaxModal .modal-body').html(response)
        },
      })
    }

    const myModalElModal = document.getElementById('ajaxModal')
    if (myModalElModal) {
      myModalElModal.addEventListener('hidden.bs.modal', () => {
        $('#ajaxModal .modal-body').html(
          '<div class="w-100 text-center py-5"><div class="spinner-border my-5" role="status"><span class="visually-hidden"></span></div></div>'
        )
      })
    }

    window.videoModal = function (url, title, modalClasses = 'modal-md', animation = 'fade') {
      $('#videoModal .modal-dialog')
        .removeClass('modal-sm modal-md modal-lg modal-xl modal-xxl modal-fullscreen')
        .addClass(modalClasses)

      $('#videoModal').removeClass('fade').addClass(animation)
      $('#videoModal .modal-title').html(title)
      $('#videoModal').modal('show')

      $.ajax({
        type: 'get',
        url: url,
        success: function (response) {
          $('#videoModal .modal-body').html(response)
        },
      })
    }

    const videoModalEl = document.getElementById('videoModal')
    if (videoModalEl) {
      videoModalEl.addEventListener('hidden.bs.modal', () => {
        $('#videoModal .modal-body').html(
          '<div class="w-100 text-center py-5"><div class="spinner-border my-5" role="status"><span class="visually-hidden"></span></div></div>'
        )
      })
    }

    window.confirmModal = function (url, elem = false, actionType = null, content = null) {
      $('#confirmModal').modal('show')
      if (elem !== false) {
        $.ajax({
          url: url,
          success: function (response) {
            try {
              const res = JSON.parse(response)
              if (res.success !== undefined) {
                window.location.href = res.success
              }
              if (window.distributeServerResponse) {
                window.distributeServerResponse(res)
              }
            } catch (e) {
              console.error(e)
            }
          },
        })
      } else {
        $('#confirmModal .confirm-btn').attr('href', url)
        $('#confirmModal .confirm-btn').removeAttr('onclick')
      }
    }

    window.tutorServiceModal = function (url) {
      $('#tutor-service-modal .modal-body').html(
        '<div class="modal-spinner-border"><div class="spinner-border text-secondary" role="status"></div></div>'
      )
      $('#tutor-service-modal').modal('show', { backdrop: 'true' })

      $.ajax({
        url: url,
        success: function (response) {
          $('#tutor-service-modal .modal-body').html(response)
        },
      })
    }

    window.toaster_message = function (type, icon, header, message) {
      const toasterMessage = `
        <div class="toast ${type} fade text-12" role="alert" aria-live="assertive" aria-atomic="true" class="rounded-3">
          <div class="toast-header">
            <i class="${icon} me-2 mt-2px text-14 d-flex"></i>
            <strong class="me-auto">${header}</strong>
            <small>Just Now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">${message}</div>
        </div>
      `
      $('.toast-container').prepend(toasterMessage)
      const toastEl = $('.toast-container .toast').first()[0]
      if (window.bootstrap && window.bootstrap.Toast) {
        const toast = new window.bootstrap.Toast(toastEl)
        toast.show()
      }
    }

    window.success = function (message) {
      window.toaster_message('success', 'fi-sr-badge-check', 'Success !', message)
    }

    window.warning = function (message) {
      window.toaster_message('warning', 'fi-sr-exclamation', 'Attention !', message)
    }

    window.error = function (message) {
      window.toaster_message('error', 'fi-sr-triangle-warning', 'An Error Occurred !', message)
    }
  }, [])

  return (
    <>
      {/* Ajax Modal */}
      <div className="modal fade" id="ajaxModal" tabIndex="-1" aria-labelledby="ajaxModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title text-16" id="ajaxModalLabel"></h6>
              <button type="button" className="btn p-0" data-bs-dismiss="modal" aria-label="Close">
                <i className="fi fi-br-cross-small text-20 text-white"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="w-100 text-center py-5">
                <div className="spinner-border my-5" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="eBtn gradient border-none" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content video_contain">
            <div className="modal-header video_model">
              <h6 className="modal-title text-dark text-16px video_model_header" id="videoModalLabel"></h6>
              <button type="button" className="btn-close video_close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="w-100 text-center py-5">
                <div className="spinner-border my-5" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Modal */}
      <div className="modal eModal fade" id="confirmModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered sweet-alerts text-sweet-alerts">
          <div className="modal-content">
            <div className="modal-body text-center">
              <div className="icon icon-confirm">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                  <path d="M22.5 29V10H25.5V29ZM22.5 38V35H25.5V38Z" />
                </svg>
              </div>
              <p className="title">Are you sure?</p>
              <p className="focus-text">You can't bring it back!</p>
              <div className="confirmBtn">
                <button type="button" className="eBtn eBtn-red" data-bs-dismiss="modal">
                  Cancel
                </button>
                <a href="" className="confirm-btn eBtn eBtn-green">
                  Yes, I'm sure
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Modal */}
      <div id="right-modal" className="modal fade" tabIndex="-1" role="dialog" aria-modal="true">
        <div className="modal-dialog modal-lg modal-right set-width">
          <div className="modal-content h-100">
            <div className="modal-header border-1">
              <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">
                ×
              </button>
              <h4 className="modal-title"></h4>
            </div>
            <div className="modal-body"></div>
          </div>
        </div>
      </div>

      {/* Tutor Service Modal */}
      <div id="tutor-service-modal" className="modal fade" tabIndex="-1" aria-modal="true">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body">...</div>
          </div>
        </div>
      </div>

      {/* Toaster container */}
      <div className="toast-container position-fixed top-0 end-0 p-3"></div>
    </>
  )
}

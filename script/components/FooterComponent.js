export default{
  template:`
    <footer class="mt-4" id="footer">
      <div class="social-media-buttons">
          <a href="https://www.instagram.com/fantasyvball" class="social-media-button"><i class="fab fa-instagram"></i></a>
          
          <a href="https://discord.gg/tczFfRMUUt" class="social-media-button"><i class="fab fa-discord"></i></a>

          <a href="https://github.com/fantasyvball/fantasyvball.github.io" class="social-media-button"><i class="fab fa-github"></i></a>
          
          <a data-bs-toggle="modal" href="#bugReportModal" class="social-media-button"><i class="fas fa-bug"></i></a>
      </div>
      <div class="copy-right-text">
          &copy; 2023 Fantasy Volleyball. All rights reserved.
      </div>
    </footer>

    <div class="modal fade" id="bugReportModal" tabindex="-1" aria-labelledby="bugReportModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background-color: #333; color: #fff; border-radius: 0.5rem;">
          <div class="modal-header">
            <h5 class="modal-title" id="bugReportModalLabel">Report a Bug</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="bugTitle" class="form-label">Bug Summary</label>
                <input type="text" class="form-control" id="bugTitle" required disabled>
              </div>
              <div class="mb-3">
                <label for="bugDescription" class="form-label">Bug Description</label>
                <textarea class="form-control" id="bugDescription" rows="4" placeholder="The current version of this form is still under development and not yet fully functional. If you come across any issues or errors, please don't hesitate to get in touch with us at fantasyvball@outlook.com or submit a bug report in our GitHub repository." required disabled></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <!-- Button to cancel bug report -->
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <!-- Button to submit bug report -->
            <button type="button" class="btn btn-danger" @click="submitBugReport" data-bs-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>

  `,
  
}

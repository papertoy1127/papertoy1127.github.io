function set_cookie(name, value, unixTime) {
    var date = new Date();
    date.setTime(date.getTime() + unixTime);
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';expires=' + date.toUTCString() + ';path=/' + ';samesite=None;secure';
}

//쿠키 값 가져오는 함수
function get_cookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}

function delete_cookie(name) {
  document.cookie = encodeURIComponent(name) + '=; expires=Thu, 01 JAN 1999 00:00:10 GMT';
}

class ModeToggle {
  static get MODE_KEY() {
    return 'mode';
  }
  static get MODE_ATTR() {
    return 'data-mode';
  }
  static get DARK_MODE() {
    return 'dark';
  }
  static get LIGHT_MODE() {
    return 'light';
  }
  static get ID() {
    return 'mode-toggle';
  }

  constructor() {
    if (this.hasMode) {
      if (this.isDarkMode) {
        if (!this.isSysDarkPrefer) {
          this.setDark();
        }
      } else {
        if (this.isSysDarkPrefer) {
          this.setLight();
        }
      }
    }

    let self = this;

    /* always follow the system prefers */
    this.sysDarkPrefers.addEventListener('change', () => {
      if (self.hasMode) {
        if (self.isDarkMode) {
          if (!self.isSysDarkPrefer) {
            self.setDark();
          }
        } else {
          if (self.isSysDarkPrefer) {
            self.setLight();
          }
        }

        self.clearMode();
      }

      self.notify();
    });
  } /* constructor() */

  get sysDarkPrefers() {
    return window.matchMedia('(prefers-color-scheme: dark)');
  }

  get isSysDarkPrefer() {
    if (get_cookie("mode") == "dark") return true;
    if (get_cookie("mode") == "light") return false;
    return this.sysDarkPrefers.matches;
  }

  get isDarkMode() {
    return this.mode === ModeToggle.DARK_MODE;
  }

  get isLightMode() {
    return this.mode === ModeToggle.LIGHT_MODE;
  }

  get hasMode() {
    return this.mode != null;
  }

  get mode() {
    return sessionStorage.getItem(ModeToggle.MODE_KEY);
  }

  /* get the current mode on screen */
  get modeStatus() {
    if (this.isDarkMode || (!this.hasMode && this.isSysDarkPrefer)) {
      return ModeToggle.DARK_MODE;
    } else {
      return ModeToggle.LIGHT_MODE;
    }
  }

  setDark() {
    document.documentElement.setAttribute(ModeToggle.MODE_ATTR, ModeToggle.DARK_MODE);
    sessionStorage.setItem(ModeToggle.MODE_KEY, ModeToggle.DARK_MODE);
    set_cookie("mode", "dark")
    console.log("dark")
  }

  setLight() {
    document.documentElement.setAttribute(ModeToggle.MODE_ATTR, ModeToggle.LIGHT_MODE);
    sessionStorage.setItem(ModeToggle.MODE_KEY, ModeToggle.LIGHT_MODE);
    set_cookie("mode", "light")
    console.log("light")
  }

  clearMode() {
    document.documentElement.removeAttribute(ModeToggle.MODE_ATTR);
    sessionStorage.removeItem(ModeToggle.MODE_KEY);
    delete_cookie("mode")
  }

  /* Notify another plugins that the theme mode has changed */
  notify() {
    window.postMessage(
      {
        direction: ModeToggle.ID,
        message: this.modeStatus
      },
      '*'
    );
  }

  flipMode() {
    if (this.isLightMode) {
      this.setDark();
    } else {
      this.setLight();
    }

    this.notify();
  } /* flipMode() */
} /* ModeToggle */

const modeToggle = new ModeToggle();

if (modeToggle.isSysDarkPrefer) {
  modeToggle.setDark();
} else {
  modeToggle.setLight();
}
export class Style implements IModule {
  getModule() {
    return {
      state: {
        style: {
          timeout: false,
          isEditing: false,
          slidein: false,
          slideout: false,
          fadein: false,
          fadeout: false,
          qrfadein: false,
          qrfadeout: false,
          notificationFadein: false,
          notificationFadeout: false,
          hotpDiabled: false,
        },
      },
      mutations: {
        showMenu(state: StyleState) {
          state.style.slidein = true;
          state.style.slideout = false;
        },
        hideMenu(state: StyleState) {
          state.style.slidein = false;
          state.style.slideout = true;
          setTimeout(() => {
            state.style.slideout = false;
          }, 200);
        },
        showInfo(state: StyleState) {
          state.style.fadein = true;
          state.style.fadeout = false;
        },
        hideInfo(state: StyleState) {
          state.style.fadein = false;
          state.style.fadeout = true;
          setTimeout(() => {
            state.style.fadeout = false;
          }, 200);
        },
        showQr(state: StyleState) {
          state.style.qrfadein = true;
          state.style.qrfadeout = false;
        },
        hideQr(state: StyleState) {
          state.style.qrfadein = false;
          state.style.qrfadeout = true;
          setTimeout(() => {
            state.style.qrfadeout = false;
          }, 200);
        },
        toggleEdit(state: StyleState) {
          state.style.isEditing = !state.style.isEditing;
        },
      },
      namespaced: true,
    };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  /* ── INJECT IDLE PLAYER UI (mobile only) ─────────────────── */
  function injectIdlePlayer() {
    // Only inject on mobile
    if (window.innerWidth > 768) return;
    const imageDiv = document.querySelector(".what-play .image");
    if (!imageDiv || document.getElementById("idle-player")) return;

    const idle = document.createElement("div");
    idle.className = "idle-player";
    idle.id = "idle-player";
    idle.innerHTML = `
      <div class="idle-rings">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="idle-core">
          <i class="fa-solid fa-music"></i>
        </div>
      </div>
      <div class="idle-waves">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div class="idle-label">Select a song</div>
    `;

    // Insert before the img tag
    const img = imageDiv.querySelector(".image-3");
    if (img) imageDiv.insertBefore(idle, img);
  }

  function setIdleState() {
    if (window.innerWidth > 768) return;
    const idle = document.getElementById("idle-player");
    const img = document.querySelector(".image-3");
    if (idle) idle.classList.remove("hidden");
    if (img) img.classList.remove("song-loaded");
  }

  function setPlayingState() {
    if (window.innerWidth > 768) return;
    const idle = document.getElementById("idle-player");
    const img = document.querySelector(".image-3");
    if (idle) idle.classList.add("hidden");
    if (img) img.classList.add("song-loaded");
  }

  injectIdlePlayer();

  /* ── COLOUR ROTATION ─────────────────────────────────────────── */
  const colors = [
    "rgb(6,98,98)",
    "rgb(98,6,6)",
    "rgb(6,98,20)",
    "rgb(70,6,98)",
    "rgb(98,70,6)",
  ];

  let colorIdx = 0;
  setInterval(() => {
    const c = colors[colorIdx % colors.length];
    document
      .querySelector(".main-content")
      ?.style.setProperty("--randColor", c);
    colorIdx++;
  }, 8000);

  let colorIdx2 = 2;
  setInterval(() => {
    const c = colors[colorIdx2 % colors.length];
    document.querySelector(".what-play")?.style.setProperty("--randColor", c);
    colorIdx2++;
  }, 9000);

  /* ── HORIZONTAL SCROLL ARROWS ────────────────────────────────── */
  document.querySelectorAll(".song-album").forEach((album) => {
    const row = album.querySelector(".songalbum-inner");
    album.querySelector(".arrow.right").onclick = () => (row.scrollLeft += 354);
    album.querySelector(".arrow.left").onclick = () => (row.scrollLeft -= 354);
  });

  /* ── NAV COLOUR ON SCROLL ────────────────────────────────────── */
  const veriscroll = document.querySelector(".main-content");
  if (veriscroll) {
    veriscroll.addEventListener(
      "wheel",
      (e) => {
        veriscroll.scrollTop += e.deltaY;
        const navItem = document.querySelector(".navitem");
        if (navItem) {
          navItem.style.backgroundColor =
            veriscroll.scrollTop <= 0 ? "transparent" : "rgb(33,31,31)";
        }
      },
      { passive: false },
    );
  }

  /* ── SONG LIST ───────────────────────────────────────────────── */
  const songs = [
    { title: "Ajanabi", src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557542/1_r4d3ig.mp4", image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558068/default_lizhuk.jpg" },
    {
      title: "let her go X husan",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772556947/4_f4vgpx.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558078/Husan_x_let_her_go_os3wen.jpg",
    },
    {
      title: "Knock Knock",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772558126/3_keeagm.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558094/knock_knock_dryrqv.jpg",
    },
    { title: "Husan", src: "", image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558085/husan_yc4qoa.jpg" },
    { title: "Sajke", src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557837/5_wmhvu1.mp3", image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558104/Sajke_unipfr.jpg" },
    {
      title: "Departure Lane",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557834/6_wy19ob.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558068/deperature_lane_lozuwm.jpg",
    },
    {
      title: "Relaxing Mashups",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772558015/30_minutes_English_x_Hindi_lofi____Study_chill___Ep_2_Of_Relaxing_Mashups_128k_vn8yp3.mp3",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558102/pal_pal_cxf3to.webp",
    },
    {
      title: "Are Aare",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557842/Aare_Aare_Official_Video_Song_Makkhi___Sudeep__Samantha_Prabhu__KK_128k_qgmq1a.mp3",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558055/Are_Are_Are_ii3iuo.jpg",
    },
    {
      title: "Iraaday",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557162/Abdul_Hannan___Rovalio_-_Iraaday__Official_Music_Video__999998_bqgfzl.mp3",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558086/iraddey_sc5jwd.webp",
    },
    {
      title: "Pal Pal",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557552/Afusic_-_Pal_Pal__Official_Music_Video__Prod.__AliSoomroMusic_128k_qk9rm3.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558102/pal_pal_chtkcn.jpg",
    },
    {
      title: "Aaja Mahi",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557834/AUR_-_Aaja_Mahi_-_Ahad_-_Usama_-_Raffey__Official_Music_Video__128k_r86pkj.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558046/aja_mahi_kkf5tb.jpg",
    },
    {
      title: "Sometimes",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557552/AUR_-_SOMETIMES_-_Raffey_-_Usama_-_Ahad__Official_Audio__128k_cyap90.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558114/sometimes_wd9exj.jpg",
    },
    { title: "BTDT", src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557557/BTDT_vcygqm.mp4", image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558057/BTDT_m478ex.jpg" },
    {
      title: "Apna Bana Le Mashup",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557564/Closer_x_Apna_Bana_Le_Full_Version___Instagram_Viral_Song_Mashup___Proyash_128k_ljzxhf.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558067/CLOSER_x_APN_BAN_LE_gbngtu.jpg",
    },
    {
      title: "Confirm of Love",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557869/Confirm_of_Love_Jukebox___Musical_Planet___Arijit_Singh_Songs_2024___Arijit_Singh_Jukebox__Best_2024_128k_l4wzlg.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558068/COIMFORM_LOVE_JUKEE_BOX_vkzeu9.jpg",
    },
    {
      title: "Hawa Banke",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557582/Darshan_Raval_-_Hawa_Banke___Official_Music_Video___Nirmaan___Naushad_Khan_128k_cqrkui.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558077/HAWA_BANKE_oro0y0.jpg",
    },
    {
      title: "Love Me Like You Do",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557592/Ellie_Goulding_-_Love_Me_Like_You_Do__Official_Video__128k_mfv5xh.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558094/LOVE_ME_LIKE_YOU_DO_iuryoa.jpg",
    },
    {
      title: "Khairiyat",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557616/Full_Song__KHAIRIYAT__BONUS_TRACK____CHHICHHORE___Sushant__Shraddha___Pritam__Amitabh_B_Arijit_Singh_128k_aag58q.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558086/KARIYAT_db8v1v.jpg",
    },
    {
      title: "Gangnam Style",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557575/Gangnam_Style_Desi_Megamix_-_Sush___Yohan_Style__128k_mchp8z.mp3",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558077/GUM_NUM_STYLE_ympdrf.jpg",
    },
    {
      title: "Ghalat Fehmi",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557639/Ghalat_Fehmi_From__Superstar__128k_tflnnn.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558077/GALAT_FAHMY_wajwgy.jpg",
    },
    {
      title: "Heart Touching",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557958/Heart_Touching_Hindi_lofi_Slowed_Reverb_Songs_-_Cry_Night_Heartbroken___DEZTER_BEATS_cgxdh8.mp3",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558079/HEART_TOUCHING_bpo30l.jpg",
    },
    {
      title: "Interstellar Theme",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557711/Interstellar_Main_Theme_-_Extra_Extended_-_Soundtrack_by__Hans_Zimmer_128k_q4o7ww.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558086/INTERSTTELER_eie6rv.jpg",
    },
    {
      title: "Akhiyaan Gulaab",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557644/Kaisi_Hai_Lagdi_Kamaal_Teri_Akhiyaan_Gulaab_-_Akhiyaan_Gulaab___Slowed___Reverb_____Mitraz_128k_rjyooj.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558046/ankhiya_gulab_s599tk.jpg",
    },
    {
      title: "Khwahish",
      src: "songs/Khwahish_64(PagalWorld.com.cm) - Copy.mp3",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558087/khhwaish_njiveo.jpg",
    },
    {
      title: "Kurchi Madathapetti",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557688/Kurchi_Madathapetti_Megamix_-_Sush___Yohan__Marathi___Hindi___Telugu___Tamil__128k_dwpjtq.mp3",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558094/kurchi_mad_zcqpra.jpg",
    },
    {
      title: "Die With A Smile",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557713/Lady_Gaga__Bruno_Mars_-_Die_With_A_Smile__Lyrics__128k_hsdxvr.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558076/die_with_smile_w3fgfz.jpg",
    },
    {
      title: "Duniyaa",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557700/Luka_Chuppi__Duniyaa_Full_Video_Song___Kartik_Aaryan_Kriti_Sanon___Akhil___Dhvani_B_128k_zo37ur.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558095/luka-chuppi_atz73n.jpg",
    },
    {
      title: "Makhna",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557750/MITRAZ_-_O_Re_Saavan__Official_Video__128k_wyug6z.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558095/makhna_sdeejo.jpg",
    },
    {
      title: "Mind Relax Lofi",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772558042/Mind_Relax_Lofi_Song___Mind_Relax_Lofi_Mashup___Mind_Fresh_Lofi_Songs___Slowed_and_Reverb_nqw8fm.mp3",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558103/Relax_song_chluyp.jpg",
    },
    {
      title: "Khayaal",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557733/MITRAZ_-_Khayaal__Official_Audio__128k_halrcu.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558087/khayaal_bfiyoh.jpg",
    },
    {
      title: "O Re Saavan",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557750/MITRAZ_-_O_Re_Saavan__Official_Video__128k_wyug6z.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558103/saavan_ndvewv.jpg",
    },
    {
      title: "Nede Nede",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557835/Nede_Nede_slowed_reverb_rphxkh.mp3",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558095/nade_nade_fpftzf.jpg",
    },
    {
      title: "Raataan Lambiyan",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557763/Raataan_Lambiyan___Official_Video___Shershaah___Sidharth___Kiara___Tanishk_B__Jubin_Nautiyal___Asees_128k_byzwgo.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558103/rata_lambeya_rxdja0.jpg",
    },
    {
      title: "Sajna",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557761/Sajna____Mizajii_x_Mufeed_x_Amann_x_Anupama____Hindi_song___2023____128k_nszcnh.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558104/sajana_dqat6c.jpg"
    },
    {
      title: "Samjho Na X whishes",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557767/Samjho_Na_X_Wishes_-_Mashup___Aditya_Rikhari___Hasan_Raheem___DJ_Sumit_Rajwanshi_128k_mdtgpl.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558104/samjho_na_rt9ysc.jpg",
    },
    {
      title: "So Many Things",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557796/So_many_things_I_do_and_girl_you_never_song_lyrics_video_128k_mevx6t.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558114/so_may_things_qbqzre.jpg",
    },
    {
      title: "Bardali",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557809/Sushant_KC_-_Bardali_ft._Indrakala_Rai__Official_Music_Video__128k_jnqcuv.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558057/bardali_snkkgd.jpg",
    },
    {
      title: "Woh Sari Raatein",
      src: "https://res.cloudinary.com/djxhuhgxg/video/upload/v1772557796/woh_sari_raatein_wo_mulakate_full_song__vo_sari_raate_vo_mulakate_new_viral_songs__dard_hua_128k_yhluaw.mp4",
      image: "https://res.cloudinary.com/djxhuhgxg/image/upload/v1772558114/woh_sari_ratain_xiyqum.jpg",
    },
  ];

  /* ── PLAYER STATE ────────────────────────────────────────────── */
  const mainAudio = document.getElementById("first-song");
  const songContainer = document.querySelector(".song_container");
  const play_middle = document.querySelector(".play-for");
  const song_image = document.querySelector(".image-3");
  const extra = document.getElementById("extra_text");
  const songTitleEl = document.getElementById("songTitle");
  const progressBar = document.getElementById("progressBar");
  const progressContainer = document.getElementById("progressContainer");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");
  const muteBtn = document.getElementById("muteBtn");
  const volumeSlider = document.querySelector(".volume-slider");

  let currentSongIndex = -1;
  let isShuffling = false;
  let isRepeating = false;

  /* ── HELPERS ─────────────────────────────────────────────────── */
  function playSong(index) {
    if (!songs[index]?.src) {
      console.warn("No src for index", index);
      return;
    }
    currentSongIndex = index;
    mainAudio.src = songs[index].src;
    mainAudio.load();
    mainAudio.play().catch((err) => console.error("Playback error:", err));
  }

  function getNextIndex() {
    if (isShuffling) {
      const valid = songs
        .map((s, i) => (s.src ? i : null))
        .filter((i) => i !== null && i !== currentSongIndex);
      return (
        valid[Math.floor(Math.random() * valid.length)] ?? currentSongIndex
      );
    }
    let next = currentSongIndex + 1;
    while (next < songs.length && !songs[next].src) next++;
    return next >= songs.length ? songs.findIndex((s) => s.src) : next;
  }

  function getPrevIndex() {
    let prev = currentSongIndex - 1;
    while (prev >= 0 && !songs[prev].src) prev--;
    return prev < 0 ? songs.length - 1 : prev;
  }

  function togglePlay() {
    if (currentSongIndex === -1) {
      const first = songs.findIndex((s) => s.src);
      if (first !== -1) playSong(first);
      return;
    }
    mainAudio.paused ? mainAudio.play() : mainAudio.pause();
  }

  function formatTime(t) {
    if (!t || isNaN(t)) return "0:00";
    const m = Math.floor(t / 60),
      s = Math.floor(t % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  /* ── ICONS ───────────────────────────────────────────────────── */
  const playIconSVG = `<svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#3aa89dff"/><polygon points="20,16 20,32 34,24" fill="#000"/></svg>`;
  const pauseIconSVG = `<svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#3aa89dff"/><rect x="18" y="16" width="4" height="16" fill="#000"/><rect x="26" y="16" width="4" height="16" fill="#000"/></svg>`;

  function updateAllPlayIcons() {
    const icon = mainAudio.paused ? playIconSVG : pauseIconSVG;
    if (play_middle) play_middle.innerHTML = icon;
    document.querySelectorAll(".song_card").forEach((card, i) => {
      const btn = card.querySelector(".play-me");
      if (!btn) return;
      btn.innerHTML =
        i === currentSongIndex && !mainAudio.paused
          ? pauseIconSVG
          : playIconSVG;
    });
  }

  function updateMuteIcon() {
    if (!muteBtn) return;
    muteBtn.classList.remove(
      "fa-volume-high",
      "fa-volume-xmark",
      "fa-volume-low",
    );
    muteBtn.classList.add(
      mainAudio.muted || mainAudio.volume === 0
        ? "fa-volume-xmark"
        : "fa-volume-high",
    );
  }

  /* ── NOW-PLAYING PANEL ───────────────────────────────────────── */
  function updateNowPlaying() {
    if (currentSongIndex === -1) return;
    const song = songs[currentSongIndex];

    // Update album art
    if (song_image) {
      song_image.src = song.image;
      // On mobile: hide idle UI, show real image
      setPlayingState();
    }

    if (songTitleEl) {
      songTitleEl.textContent = song.title;
      Object.assign(songTitleEl.style, {
        fontFamily: "DM Sans, sans-serif",
        fontWeight: "bold",
        fontSize: "18px",
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginTop: "10px",
        textAlign: "center",
      });
    }

    if (extra) extra.style.display = "none";
  }

  /* ── RENDER LIBRARY ──────────────────────────────────────────── */
  function renderLibrary() {
    if (!songContainer) return;
    songContainer.innerHTML = "";
    songs.forEach((song, index) => {
      const card = document.createElement("div");
      card.className = "song_card";
      card.innerHTML = `
        <img src="${song.image}" alt="${song.title}" onerror="this.src='song-image/default.jpg'">
        <div class="name"><p>${song.title}</p></div>
        <div class="play-me">${playIconSVG}</div>`;

      card.querySelector(".play-me").addEventListener("click", () => {
        if (!song.src) {
          alert("Song not available");
          return;
        }
        if (currentSongIndex === index && !mainAudio.paused) {
          mainAudio.pause();
        } else {
          playSong(index);
          document
            .querySelector(".library-container")
            ?.classList.remove("active");
        }
      });

      songContainer.appendChild(card);
    });
  }

  /* ── TRANSPORT CONTROLS ──────────────────────────────────────── */
  function bindTransportControls() {
    play_middle?.addEventListener("click", togglePlay);

    document
      .querySelector(".fa-backward-step")
      ?.addEventListener("click", () => {
        playSong(getPrevIndex());
      });

    document
      .querySelector(".fa-forward-step")
      ?.addEventListener("click", () => {
        playSong(getNextIndex());
      });

    const shuffleBtn = document.querySelector(".fa-shuffle");
    shuffleBtn?.addEventListener("click", () => {
      isShuffling = !isShuffling;
      shuffleBtn.style.color = isShuffling ? "#3aa89dff" : "";
    });

    const repeatBtn = document.querySelector(".fa-repeat");
    repeatBtn?.addEventListener("click", () => {
      isRepeating = !isRepeating;
      repeatBtn.style.color = isRepeating ? "#3aa89dff" : "";
    });

    muteBtn?.addEventListener("click", () => {
      mainAudio.muted = !mainAudio.muted;
      updateMuteIcon();
    });

    volumeSlider?.addEventListener("input", () => {
      mainAudio.volume = volumeSlider.value / 100;
      mainAudio.muted = mainAudio.volume === 0;
      updateMuteIcon();
    });
  }

  /* ── PROGRESS BAR ────────────────────────────────────────────── */
  mainAudio.addEventListener("loadedmetadata", () => {
    if (durationEl) durationEl.textContent = formatTime(mainAudio.duration);
  });

  mainAudio.addEventListener("timeupdate", () => {
    if (!mainAudio.duration) return;
    const pct = (mainAudio.currentTime / mainAudio.duration) * 100;
    if (progressBar) progressBar.style.width = pct + "%";
    if (currentTimeEl)
      currentTimeEl.textContent = formatTime(mainAudio.currentTime);
  });

  progressContainer?.addEventListener("click", (e) => {
    if (!mainAudio.duration) return;
    mainAudio.currentTime =
      (e.offsetX / progressContainer.clientWidth) * mainAudio.duration;
  });

  /* ── AUDIO EVENTS ────────────────────────────────────────────── */
  mainAudio.addEventListener("play", () => {
    updateAllPlayIcons();
    updateNowPlaying();
  });
  mainAudio.addEventListener("pause", () => {
    updateAllPlayIcons();
  });

  mainAudio.addEventListener("ended", () => {
    if (isRepeating) {
      mainAudio.currentTime = 0;
      mainAudio.play();
    } else playSong(getNextIndex());
  });

  /* ── INIT ────────────────────────────────────────────────────── */
  renderLibrary();
  bindTransportControls();
  updateAllPlayIcons();
  updateMuteIcon();

  // Start in idle state on mobile
  setIdleState();

  window.toggleLibraryDrawer = function () {
    document.querySelector(".library-container")?.classList.toggle("active");
  };

  /* ── SEARCH FILTER ───────────────────────────────────────────── */
  function filterSongs(query) {
    const q = query.trim().toLowerCase();
    const cards = document.querySelectorAll(".song_card");
    let matchCount = 0;

    cards.forEach((card, index) => {
      const title = songs[index]?.title?.toLowerCase() || "";
      const match = q === "" || title.includes(q);
      card.style.display = match ? "flex" : "none";
      if (match) matchCount++;
    });

    let noResult = document.getElementById("no-search-result");
    if (!noResult) {
      noResult = document.createElement("div");
      noResult.id = "no-search-result";
      noResult.style.cssText = `color:rgba(255,255,255,0.4);font-family:'DM Sans',sans-serif;font-size:14px;text-align:center;padding:24px 12px;display:none;`;
      noResult.textContent = "No songs found";
      document.querySelector(".song_container")?.appendChild(noResult);
    }
    noResult.style.display = matchCount === 0 && q !== "" ? "block" : "none";
  }

  const libSearchInput = document.getElementById("search");
  if (libSearchInput) {
    libSearchInput.addEventListener("input", (e) => {
      filterSongs(e.target.value);
      const navInput = document.querySelector(".spotify-search input");
      if (navInput) navInput.value = e.target.value;
    });
  }

  const navSearchInput = document.querySelector(".spotify-search input");
  if (navSearchInput) {
    navSearchInput.addEventListener("input", (e) => {
      filterSongs(e.target.value);
      const libInput = document.getElementById("search");
      if (libInput) libInput.value = e.target.value;
      if (window.innerWidth <= 768) {
        document.querySelector(".library-container")?.classList.add("active");
      }
    });

    navSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        navSearchInput.value = "";
        const libInput = document.getElementById("search");
        if (libInput) libInput.value = "";
        filterSongs("");
        navSearchInput.blur();
      }
    });
  }
});

"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";

import {
  FaChevronLeft,
  FaChevronRight,
  FaXmark,
} from "react-icons/fa6";

import styles from "./Media.module.css";

type MediaImage = {
  src: string;
  name: string;
};

type MediaGalleryProps = {
  images: MediaImage[];
};

export default function MediaGallery({
  images,
}: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const dialogRef =
    useRef<HTMLDialogElement>(null);

  const triggerRef =
    useRef<HTMLButtonElement>(null);

  const selectedImage =
    selectedIndex === null
      ? null
      : images[selectedIndex];

  /* =====================================
     CLOSE LIGHTBOX
  ===================================== */

  const closeLightbox = useCallback(() => {
    const dialog = dialogRef.current;

    if (dialog?.open) {
      dialog.close();
      return;
    }

    setSelectedIndex(null);
  }, []);

  /* =====================================
     PREVIOUS / NEXT
  ===================================== */

  const moveImage = useCallback(
    (direction: 1 | -1) => {
      setSelectedIndex((currentIndex) => {
        if (
          currentIndex === null ||
          images.length === 0
        ) {
          return currentIndex;
        }

        return (
          (currentIndex +
            direction +
            images.length) %
          images.length
        );
      });
    },
    [images.length]
  );

  /* =====================================
     OPEN DIALOG WHEN IMAGE SELECTED
  ===================================== */

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (selectedIndex === null) {
      if (dialog.open) {
        dialog.close();
      }

      return;
    }

    if (!dialog.open) {
      dialog.showModal();
    }
  }, [selectedIndex]);

  /* =====================================
     KEYBOARD CONTROLS
  ===================================== */

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        moveImage(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();

        moveImage(1);
      }
    };

    document.body.style.overflow =
      "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [moveImage, selectedIndex]);

  /* =====================================
     OPEN IMAGE
  ===================================== */

  const openImage = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    triggerRef.current =
      event.currentTarget;

    setSelectedIndex(index);
  };

  /* =====================================
     DIALOG CLOSED
  ===================================== */

  const handleDialogClose = () => {
    setSelectedIndex(null);

    window.requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  };

  /* =====================================
     BACKDROP CLICK
  ===================================== */

  const handleDialogClick = (
    event: React.MouseEvent<HTMLDialogElement>
  ) => {
    if (
      event.target === event.currentTarget
    ) {
      closeLightbox();
    }
  };

  /* =====================================
     CONTENT CLICK
  ===================================== */

  const handleContentClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (
      event.target === event.currentTarget
    ) {
      closeLightbox();
    }
  };

  return (
    <>
      {/* =====================================
          MEDIA GRID
      ===================================== */}

      <div className={styles.mediaGallery}>
        {images.map((image, index) => (
          <button
            type="button"
            className={styles.galleryCard}
            key={image.src}
            onClick={(event) =>
              openImage(index, event)
            }
            aria-label={`Open media image ${
              index + 1
            } of ${images.length}`}
          >
            <Image
              src={image.src}
              alt={`Ananda Utsav media coverage ${
                index + 1
              }`}
              fill
              sizes="
                (max-width: 600px) 92vw,
                (max-width: 900px) 46vw,
                30vw
              "
              className={
                styles.galleryImage
              }
            />

            <span
              className={
                styles.galleryNumber
              }
              aria-hidden="true"
            >
              {String(index + 1).padStart(
                2,
                "0"
              )}
            </span>
          </button>
        ))}
      </div>

      {/* =====================================
          LIGHTBOX
      ===================================== */}

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        onClose={handleDialogClose}
        onClick={handleDialogClick}
        aria-label={
          selectedIndex === null
            ? "Media image viewer"
            : `Viewing media image ${
                selectedIndex + 1
              } of ${images.length}`
        }
      >
        {selectedImage &&
          selectedIndex !== null && (
            <div
              className={
                styles.lightboxContent
              }
              onClick={handleContentClick}
            >
              {/* CLOSE */}

              <button
                type="button"
                className={
                  styles.lightboxClose
                }
                onClick={closeLightbox}
                aria-label="Close image viewer"
                autoFocus
              >
                <FaXmark
                  aria-hidden="true"
                />
              </button>

              {/* PREVIOUS */}

              {images.length > 1 && (
                <button
                  type="button"
                  className={`${styles.lightboxNav} ${styles.lightboxPrevious}`}
                  onClick={(event) => {
                    event.stopPropagation();

                    moveImage(-1);
                  }}
                  aria-label="View previous media image"
                >
                  <FaChevronLeft
                    aria-hidden="true"
                  />
                </button>
              )}

              {/* MAIN IMAGE */}

              <figure
                className={
                  styles.lightboxFigure
                }
                onClick={(event) =>
                  event.stopPropagation()
                }
              >
                <div
                  className={
                    styles.lightboxMedia
                  }
                >
                  <Image
                    src={selectedImage.src}
                    alt={`Ananda Utsav media coverage ${
                      selectedIndex + 1
                    }`}
                    fill
                    sizes="
                      (max-width: 760px) 94vw,
                      88vw
                    "
                    className={
                      styles.lightboxImage
                    }
                    priority
                  />
                </div>

                <figcaption
                  className={
                    styles.lightboxCaption
                  }
                  aria-live="polite"
                >
                  Media {selectedIndex + 1}{" "}
                  of {images.length}
                </figcaption>
              </figure>

              {/* NEXT */}

              {images.length > 1 && (
                <button
                  type="button"
                  className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                  onClick={(event) => {
                    event.stopPropagation();

                    moveImage(1);
                  }}
                  aria-label="View next media image"
                >
                  <FaChevronRight
                    aria-hidden="true"
                  />
                </button>
              )}
            </div>
          )}
      </dialog>
    </>
  );
}
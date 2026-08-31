"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaXmark,
} from "react-icons/fa6";

import styles from "./Gallery.module.css";
import type { GalleryImage } from "./galleryData";

type GalleryGridProps = {
  images: GalleryImage[];
};

function imageDescription(index: number) {
  return `Ananda Utsav celebration photograph ${index + 1}`;
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedImage =
    selectedIndex === null ? null : images[selectedIndex];

  const closeLightbox = useCallback(() => {
    const dialog = dialogRef.current;

    if (dialog?.open) {
      dialog.close();
      return;
    }

    setSelectedIndex(null);
  }, []);

  const moveImage = useCallback(
    (direction: 1 | -1) => {
      setSelectedIndex((currentIndex) => {
        if (currentIndex === null) {
          return currentIndex;
        }

        return (currentIndex + direction + images.length) % images.length;
      });
    },
    [images.length]
  );

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

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
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

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [moveImage, selectedIndex]);

  const openImage = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    triggerRef.current = event.currentTarget;
    setSelectedIndex(index);
  };

  const handleDialogClose = () => {
    setSelectedIndex(null);

    window.requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  };

  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeLightbox();
    }
  };

  const handleLightboxContentClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <button
            type="button"
            className={styles.card}
            key={image.src}
            onClick={(event) => openImage(index, event)}
            aria-label={`Open photograph ${index + 1} of ${images.length}`}
          >
            <Image
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
              sizes="(max-width: 520px) 44vw, (max-width: 760px) 43vw, (max-width: 1080px) 29vw, 280px"
              className={styles.image}
            />

            <span className={styles.photoNumber} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        onClose={handleDialogClose}
        onClick={handleDialogClick}
        aria-label={
          selectedIndex === null
            ? "Gallery image viewer"
            : `Viewing photograph ${selectedIndex + 1} of ${images.length}`
        }
      >
        {selectedImage && selectedIndex !== null && (
          <div
            className={styles.lightboxContent}
            onClick={handleLightboxContentClick}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close image viewer"
              autoFocus
            >
              <FaXmark aria-hidden="true" />
            </button>

            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.lightboxPrevious}`}
              onClick={() => moveImage(-1)}
              aria-label="View previous photograph"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>

            <figure className={styles.lightboxFigure}>
              <Image
                src={selectedImage.src}
                alt={imageDescription(selectedIndex)}
                width={selectedImage.width}
                height={selectedImage.height}
                sizes="(max-width: 760px) 92vw, 86vw"
                className={styles.lightboxImage}
              />

              <figcaption className={styles.lightboxCaption} aria-live="polite">
                Photograph {selectedIndex + 1} of {images.length}
              </figcaption>
            </figure>

            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={() => moveImage(1)}
              aria-label="View next photograph"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}

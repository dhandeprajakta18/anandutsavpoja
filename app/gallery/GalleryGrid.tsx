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

import styles from "./Gallery.module.css";

/* =====================================
   TYPES
===================================== */

type GalleryImage = string;

type GalleryCategory = {
  id: "durga-puja" | "members";
  label: string;
  images: GalleryImage[];
};

type GalleryGridProps = {
  categories: GalleryCategory[];
};

/* =====================================
   IMAGE DESCRIPTION
===================================== */

function imageDescription(
  index: number
) {
  return `Ananda Utsav celebration photograph ${
    index + 1
  }`;
}

/* =====================================
   COMPONENT
===================================== */

export default function GalleryGrid({
  categories,
}: GalleryGridProps) {
  const [
    selectedCategoryId,
    setSelectedCategoryId,
  ] = useState<
    "durga-puja" | "members"
  >("durga-puja");

  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState<number | null>(null);

  const dialogRef =
    useRef<HTMLDialogElement>(null);

  const triggerRef =
    useRef<HTMLButtonElement>(null);

  /* =====================================
     ACTIVE CATEGORY
  ===================================== */

  const activeCategory =
    categories.find(
      (category) =>
        category.id ===
        selectedCategoryId
    );

  const activeImages =
    activeCategory?.images ?? [];

  /* =====================================
     SELECTED IMAGE
  ===================================== */

  const selectedImage =
    selectedIndex === null
      ? null
      : activeImages[selectedIndex];

  /* =====================================
     CLOSE LIGHTBOX
  ===================================== */

  const closeLightbox =
    useCallback(() => {
      const dialog =
        dialogRef.current;

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
      setSelectedIndex(
        (currentIndex) => {
          if (
            currentIndex === null ||
            activeImages.length === 0
          ) {
            return currentIndex;
          }

          return (
            (currentIndex +
              direction +
              activeImages.length) %
            activeImages.length
          );
        }
      );
    },
    [activeImages.length]
  );

  /* =====================================
     OPEN DIALOG
  ===================================== */

  useEffect(() => {
    const dialog =
      dialogRef.current;

    if (!dialog) {
      return;
    }

    if (
      selectedIndex === null
    ) {
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
     KEYBOARD NAVIGATION
  ===================================== */

  useEffect(() => {
    if (
      selectedIndex === null
    ) {
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

      if (
        event.key ===
        "ArrowLeft"
      ) {
        event.preventDefault();

        moveImage(-1);
      }

      if (
        event.key ===
        "ArrowRight"
      ) {
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
  }, [
    moveImage,
    selectedIndex,
  ]);

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

  const handleDialogClose =
    () => {
      setSelectedIndex(null);

      window.requestAnimationFrame(
        () => {
          triggerRef.current?.focus();
        }
      );
    };

  /* =====================================
     CLICK BACKDROP
  ===================================== */

  const handleDialogClick = (
    event: React.MouseEvent<HTMLDialogElement>
  ) => {
    if (
      event.target ===
      event.currentTarget
    ) {
      closeLightbox();
    }
  };

  /* =====================================
     CLICK EMPTY LIGHTBOX AREA
  ===================================== */

  const handleLightboxContentClick =
    (
      event: React.MouseEvent<HTMLDivElement>
    ) => {
      if (
        event.target ===
        event.currentTarget
      ) {
        closeLightbox();
      }
    };

  /* =====================================
     CATEGORY
  ===================================== */

  const selectCategory = (
    categoryId:
      | "durga-puja"
      | "members"
  ) => {
    triggerRef.current = null;

    setSelectedIndex(null);

    setSelectedCategoryId(
      categoryId
    );
  };

  return (
    <>
      {/* =====================================
          CATEGORY FILTERS
      ===================================== */}

      <div
        className={
          styles.categoryBar
        }
        aria-label="Gallery categories"
      >
        {categories.map(
          (category) => (
            <button
              type="button"
              key={category.id}
              className={
                styles.categoryButton
              }
              onClick={() =>
                selectCategory(
                  category.id
                )
              }
              aria-pressed={
                selectedCategoryId ===
                category.id
              }
            >
              {category.label}
            </button>
          )
        )}
      </div>

      {/* =====================================
          IMAGE GRID
      ===================================== */}

      {activeImages.length >
      0 ? (
        <div
          className={
            styles.galleryGrid
          }
        >
          {activeImages.map(
            (image, index) => (
              <button
                type="button"
                className={
                  styles.card
                }
                key={image}
                onClick={(event) =>
                  openImage(
                    index,
                    event
                  )
                }
                aria-label={`Open photograph ${
                  index + 1
                } of ${
                  activeImages.length
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="
                    (max-width: 520px) 44vw,
                    (max-width: 760px) 43vw,
                    (max-width: 1080px) 29vw,
                    280px
                  "
                  className={
                    styles.image
                  }
                />

                <span
                  className={
                    styles.photoNumber
                  }
                  aria-hidden="true"
                >
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>
              </button>
            )
          )}
        </div>
      ) : (
        <div
          className={
            styles.emptyGallery
          }
        >
          No photographs available
          yet.
        </div>
      )}

      {/* =====================================
          LIGHTBOX
      ===================================== */}

      <dialog
        ref={dialogRef}
        className={
          styles.lightbox
        }
        onClose={
          handleDialogClose
        }
        onClick={
          handleDialogClick
        }
        aria-label={
          selectedIndex === null
            ? "Gallery image viewer"
            : `Viewing photograph ${
                selectedIndex + 1
              } of ${
                activeImages.length
              }`
        }
      >
        {selectedImage &&
          selectedIndex !==
            null && (
            <div
              className={
                styles.lightboxContent
              }
              onClick={
                handleLightboxContentClick
              }
            >
              {/* CLOSE */}

              <button
                type="button"
                className={
                  styles.lightboxClose
                }
                onClick={
                  closeLightbox
                }
                aria-label="Close image viewer"
                autoFocus
              >
                <FaXmark
                  aria-hidden="true"
                />
              </button>

              {/* PREVIOUS */}

              {activeImages.length >
                1 && (
                <button
                  type="button"
                  className={`${styles.lightboxNav} ${styles.lightboxPrevious}`}
                  onClick={() =>
                    moveImage(-1)
                  }
                  aria-label="View previous photograph"
                >
                  <FaChevronLeft
                    aria-hidden="true"
                  />
                </button>
              )}

              {/* IMAGE */}

              <figure
                className={
                  styles.lightboxFigure
                }
              >
                <div
                  className={
                    styles.lightboxMedia
                  }
                >
                  <Image
                    src={
                      selectedImage
                    }
                    alt={imageDescription(
                      selectedIndex
                    )}
                    fill
                    sizes="
                      (max-width: 760px) 92vw,
                      86vw
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
                  Photograph{" "}
                  {selectedIndex +
                    1}{" "}
                  of{" "}
                  {
                    activeImages.length
                  }
                </figcaption>
              </figure>

              {/* NEXT */}

              {activeImages.length >
                1 && (
                <button
                  type="button"
                  className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                  onClick={() =>
                    moveImage(1)
                  }
                  aria-label="View next photograph"
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
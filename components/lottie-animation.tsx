"use client"

import { useEffect, useRef } from "react"
import lottie from "lottie-web"

export function LottieAnimation() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    // Animation data for a student and mentor counselling session
    const animationData = {
      v: "5.7.8",
      fr: 30,
      ip: 0,
      op: 180,
      w: 800,
      h: 600,
      nm: "Counselling Session",
      ddd: 0,
      assets: [],
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Background",
          sr: 1,
          ks: {
            o: { a: 0, k: 100 },
            r: { a: 0, k: 0 },
            p: { a: 0, k: [400, 300, 0] },
            a: { a: 0, k: [0, 0, 0] },
            s: { a: 0, k: [100, 100, 100] },
          },
          ao: 0,
          shapes: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [800, 600] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 0 },
              nm: "Rectangle",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.949, 0.969, 1, 1] },
              o: { a: 0, k: 100 },
              r: 1,
              nm: "Fill 1",
              hd: false,
            },
          ],
          ip: 0,
          op: 180,
          st: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Student",
          sr: 1,
          ks: {
            o: { a: 0, k: 100 },
            r: { a: 0, k: 0 },
            p: {
              a: 1,
              k: [
                { t: 0, s: [300, 320, 0], e: [300, 315, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
                { t: 90, s: [300, 315, 0], e: [300, 320, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
                { t: 180, s: [300, 320, 0], e: [300, 315, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              ],
            },
            a: { a: 0, k: [0, 0, 0] },
            s: { a: 0, k: [100, 100, 100] },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [100, 150] },
                  p: { a: 0, k: [0, 0] },
                  r: { a: 0, k: 20 },
                  nm: "Body",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.2, 0.4, 0.8, 1] },
                  o: { a: 0, k: 100 },
                  r: 1,
                  nm: "Fill 1",
                  hd: false,
                },
              ],
              nm: "Student Body",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "el",
                  d: 1,
                  s: { a: 0, k: [60, 60] },
                  p: { a: 0, k: [0, -100] },
                  nm: "Head",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.9, 0.8, 0.7, 1] },
                  o: { a: 0, k: 100 },
                  r: 1,
                  nm: "Fill 1",
                  hd: false,
                },
              ],
              nm: "Student Head",
              hd: false,
            },
          ],
          ip: 0,
          op: 180,
          st: 0,
        },
        {
          ddd: 0,
          ind: 3,
          ty: 4,
          nm: "Mentor",
          sr: 1,
          ks: {
            o: { a: 0, k: 100 },
            r: { a: 0, k: 0 },
            p: {
              a: 1,
              k: [
                { t: 0, s: [500, 310, 0], e: [500, 305, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
                { t: 90, s: [500, 305, 0], e: [500, 310, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
                { t: 180, s: [500, 310, 0], e: [500, 305, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              ],
            },
            a: { a: 0, k: [0, 0, 0] },
            s: { a: 0, k: [100, 100, 100] },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [110, 160] },
                  p: { a: 0, k: [0, 0] },
                  r: { a: 0, k: 20 },
                  nm: "Body",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.6, 0.3, 0.7, 1] },
                  o: { a: 0, k: 100 },
                  r: 1,
                  nm: "Fill 1",
                  hd: false,
                },
              ],
              nm: "Mentor Body",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "el",
                  d: 1,
                  s: { a: 0, k: [70, 70] },
                  p: { a: 0, k: [0, -105] },
                  nm: "Head",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.9, 0.8, 0.7, 1] },
                  o: { a: 0, k: 100 },
                  r: 1,
                  nm: "Fill 1",
                  hd: false,
                },
              ],
              nm: "Mentor Head",
              hd: false,
            },
          ],
          ip: 0,
          op: 180,
          st: 0,
        },
        {
          ddd: 0,
          ind: 4,
          ty: 4,
          nm: "Table",
          sr: 1,
          ks: {
            o: { a: 0, k: 100 },
            r: { a: 0, k: 0 },
            p: { a: 0, k: [400, 400, 0] },
            a: { a: 0, k: [0, 0, 0] },
            s: { a: 0, k: [100, 100, 100] },
          },
          ao: 0,
          shapes: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [300, 40] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 10 },
              nm: "Rectangle",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.8, 0.6, 0.4, 1] },
              o: { a: 0, k: 100 },
              r: 1,
              nm: "Fill 1",
              hd: false,
            },
          ],
          ip: 0,
          op: 180,
          st: 0,
        },
        {
          ddd: 0,
          ind: 5,
          ty: 4,
          nm: "Speech Bubble",
          sr: 1,
          ks: {
            o: {
              a: 1,
              k: [
                { t: 0, s: [0], e: [100], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
                { t: 30, s: [100], e: [100], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
                { t: 90, s: [100], e: [0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
                { t: 120, s: [0], e: [0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              ],
            },
            r: { a: 0, k: 0 },
            p: { a: 0, k: [500, 200, 0] },
            a: { a: 0, k: [0, 0, 0] },
            s: { a: 0, k: [100, 100, 100] },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [120, 60] },
                  p: { a: 0, k: [0, 0] },
                  r: { a: 0, k: 15 },
                  nm: "Bubble",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 1, 1, 1] },
                  o: { a: 0, k: 100 },
                  r: 1,
                  nm: "Fill 1",
                  hd: false,
                },
                {
                  ty: "st",
                  c: { a: 0, k: [0.6, 0.3, 0.7, 1] },
                  o: { a: 0, k: 100 },
                  w: { a: 0, k: 2 },
                  lc: 2,
                  lj: 2,
                  nm: "Stroke 1",
                  hd: false,
                },
              ],
              nm: "Speech Bubble",
              hd: false,
            },
          ],
          ip: 0,
          op: 180,
          st: 0,
        },
        {
          ddd: 0,
          ind: 6,
          ty: 4,
          nm: "Speech Bubble 2",
          sr: 1,
          ks: {
            o: {
              a: 1,
              k: [
                { t: 0, s: [0], e: [0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
                { t: 120, s: [0], e: [100], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
                { t: 150, s: [100], e: [100], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
                { t: 180, s: [100], e: [0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              ],
            },
            r: { a: 0, k: 0 },
            p: { a: 0, k: [300, 200, 0] },
            a: { a: 0, k: [0, 0, 0] },
            s: { a: 0, k: [100, 100, 100] },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [120, 60] },
                  p: { a: 0, k: [0, 0] },
                  r: { a: 0, k: 15 },
                  nm: "Bubble",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 1, 1, 1] },
                  o: { a: 0, k: 100 },
                  r: 1,
                  nm: "Fill 1",
                  hd: false,
                },
                {
                  ty: "st",
                  c: { a: 0, k: [0.2, 0.4, 0.8, 1] },
                  o: { a: 0, k: 100 },
                  w: { a: 0, k: 2 },
                  lc: 2,
                  lj: 2,
                  nm: "Stroke 1",
                  hd: false,
                },
              ],
              nm: "Speech Bubble 2",
              hd: false,
            },
          ],
          ip: 0,
          op: 180,
          st: 0,
        },
      ],
    }

    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    })

    return () => {
      anim.destroy()
    }
  }, [])

  return <div ref={container} className="w-full h-full" />
}

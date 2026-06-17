import React from "react";
import { Bagel, Btn } from "./atoms.jsx";
import { ORDER_URL } from "../order.js";

export function CartDrawer({ open, items, onClose, onIncrement, onDecrement }) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const tax = subtotal * 0.13;
  const total = subtotal + tax;
  React.useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(26,22,18,.55)",
          zIndex: 90,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .25s var(--ease)",
        }}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="ticket-title"
        aria-hidden={!open}
        style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(420px, 92vw)",
        background: "var(--paper)",
        borderLeft: "3px solid var(--ink)",
        zIndex: 100,
        transform: open ? "translateX(0)" : "translateX(110%)",
        transition: "transform .35s var(--ease)",
        display: "flex", flexDirection: "column",
        boxShadow: "-12px 0 0 var(--ink)",
      }}>
        <div style={{
          padding: "20px 24px",
          borderBottom: "2.5px solid var(--ink)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: "var(--mustard)",
        }}>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 16, letterSpacing: ".22em", textTransform: "uppercase" }}>Your ticket</div>
            <div id="ticket-title" style={{ fontFamily: "var(--display)", fontSize: 32, lineHeight: 1, marginTop: 2 }}>
              The Order
            </div>
          </div>
          <button onClick={onClose} aria-label="Close ticket" style={{
            all: "unset", cursor: "pointer",
            width: 36, height: 36, borderRadius: "50%",
            border: "2.5px solid var(--ink)", background: "var(--paper)",
            display: "grid", placeItems: "center",
            fontSize: 20, lineHeight: 1,
          }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
          {items.length === 0 ? (
            <div style={{ padding: "60px 0", textAlign: "center", fontFamily: "var(--serif)", fontSize: 18, color: "var(--ink)", opacity: .7 }}>
              <div style={{ display: "grid", placeItems: "center", marginBottom: 18 }}>
                <Bagel variant="plain" size={80} color="#d4a55a" color2="#a06c2c" />
              </div>
              Your ticket is empty.<br/>
              <span style={{ fontFamily: "var(--mono)", fontSize: 16, letterSpacing: ".14em", textTransform: "uppercase" }}>Pick a bagel to begin</span>
            </div>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {items.map((it) => (
                <li key={it.key} style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr auto",
                  alignItems: "center",
                  gap: 14,
                  padding: 14,
                  background: "var(--schmear)",
                  border: "2px solid var(--ink)",
                  borderRadius: 12,
                }}>
                  {it.icon ? (
                    <Bagel variant={it.icon.variant} size={44} color={it.icon.color} color2={it.icon.color2} />
                  ) : (
                    <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--mustard)", border: "2px solid var(--ink)" }} />
                  )}
                  <div>
                    <div style={{ fontFamily: "var(--body)", fontWeight: 700, fontSize: 16, lineHeight: 1.1 }}>{it.name}</div>
                    {it.sub && <div style={{ fontFamily: "var(--mono)", fontSize: 16, opacity: .65, marginTop: 4 }}>{it.sub}</div>}
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
                      <button aria-label={`Remove one ${it.name}`} onClick={() => onDecrement(it.key)} style={{ all: "unset", cursor: "pointer", width: 28, height: 28, borderRadius: 6, background: "var(--paper)", border: "1.5px solid var(--ink)", display: "grid", placeItems: "center", fontSize: 16 }}>−</button>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 16, minWidth: 18, textAlign: "center" }}>{it.qty}</span>
                      <button aria-label={`Add one ${it.name}`} onClick={() => onIncrement(it.key)} style={{ all: "unset", cursor: "pointer", width: 28, height: 28, borderRadius: 6, background: "var(--paper)", border: "1.5px solid var(--ink)", display: "grid", placeItems: "center", fontSize: 16 }}>+</button>
                    </div>
                  </div>
                  <div style={{ fontFamily: "var(--display)", fontSize: 22, lineHeight: 1 }}>
                    ${(it.price * it.qty).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={{
          padding: "20px 24px",
          borderTop: "2.5px solid var(--ink)",
          background: "var(--paper-2)",
          display: "flex", flexDirection: "column", gap: 12,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 16, letterSpacing: ".1em" }}>
            <span>SUBTOTAL</span><span>${subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 16, letterSpacing: ".1em" }}>
            <span>HST (13%)</span><span>${tax.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: 8, borderTop: "2px dashed var(--ink)" }}>
            <span style={{ fontFamily: "var(--display)", fontSize: 24 }}>TOTAL</span>
            <span style={{ fontFamily: "var(--display)", fontSize: 36 }}>${total.toFixed(2)}</span>
          </div>
          {items.length > 0 && (
            <div style={{ padding: 12, background: "var(--schmear)", border: "2px solid var(--ink)", borderRadius: 8, fontSize: 16, lineHeight: 1.35 }}>
              <strong>Your ticket is saved on this device.</strong> Clover Online Ordering opens separately and cannot receive these selections automatically.
            </div>
          )}
          <Btn
            variant="yellow"
            icon="→"
            href={ORDER_URL}
            style={{ justifyContent: "center" }}
            onClick={(e) => {
              // Open the external ordering system in a new tab so the in-page cart isn't lost.
              e.preventDefault();
              window.open(ORDER_URL, "_blank", "noopener");
            }}
          >Send to oven</Btn>
        </div>
      </aside>
    </>
  );
}

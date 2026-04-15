"use client";

import { useState } from "react";

const MAIL_TO = "mikami.work.sub@gmail.com";

const CATEGORY_LABELS = {
  lp: "LP制作",
  corporate: "コーポレートサイト制作",
  server: "サーバー構築",
  maintenance: "月額保守",
  gas: "GAS・業務自動化",
  other: "その他・ご相談",
};

export default function ContactForm() {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const e = {};
    if (!data.get("name")) e.name = "お名前は必須です。";
    const email = data.get("email");
    if (!email) e.email = "メールアドレスは必須です。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "正しいメールアドレスを入力してください。";
    if (!data.get("message")) e.message = "メッセージは必須です。";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const errs = validate(fd);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const name = fd.get("name");
    const email = fd.get("email");
    const category = fd.get("category");
    const message = fd.get("message");

    const categoryLabel = CATEGORY_LABELS[category] || "未選択";
    const subject = `【ポートフォリオ】${categoryLabel}のご相談 - ${name}様`;
    const body = [
      `お名前: ${name}`,
      `メールアドレス: ${email}`,
      `ご依頼の種類: ${categoryLabel}`,
      "",
      "--- メッセージ ---",
      message,
    ].join("\n");

    window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputCls =
    "w-full px-4 py-2.5 bg-base-primary border border-line rounded-lg text-txt-primary text-sm transition-colors focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 placeholder:text-txt-muted";
  const errorCls = "text-red-400 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* お名前 */}
      <div>
        <label className="block text-sm font-medium text-txt-secondary mb-1.5">
          お名前 <span className="text-red-400">*</span>
        </label>
        <input name="name" placeholder="山田 太郎" className={inputCls} />
        {errors.name && <p className={errorCls}>{errors.name}</p>}
      </div>

      {/* メールアドレス */}
      <div>
        <label className="block text-sm font-medium text-txt-secondary mb-1.5">
          メールアドレス <span className="text-red-400">*</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="example@email.com"
          className={inputCls}
        />
        {errors.email && <p className={errorCls}>{errors.email}</p>}
      </div>

      {/* ご依頼の種類 */}
      <div>
        <label className="block text-sm font-medium text-txt-secondary mb-1.5">
          ご依頼の種類
        </label>
        <select name="category" className={inputCls}>
          <option value="">選択してください</option>
          <option value="lp">LP制作</option>
          <option value="corporate">コーポレートサイト制作</option>
          <option value="server">サーバー構築</option>
          <option value="maintenance">月額保守</option>
          <option value="gas">GAS・業務自動化</option>
          <option value="other">その他・ご相談</option>
        </select>
      </div>

      {/* メッセージ */}
      <div>
        <label className="block text-sm font-medium text-txt-secondary mb-1.5">
          メッセージ <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="ご依頼内容やご相談をお聞かせください"
          className={inputCls}
        />
        {errors.message && <p className={errorCls}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg font-semibold text-base-primary bg-accent hover:bg-accent-light transition-colors cursor-pointer"
      >
        <i className="fas fa-paper-plane mr-2" />
        メーラーで送信する
      </button>
      <p className="text-txt-muted text-xs text-center">
        ボタンを押すとメールアプリが開きます
      </p>
    </form>
  );
}

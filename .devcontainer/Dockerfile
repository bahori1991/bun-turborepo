# コンテナイメージの指定
FROM oven/bun:1.3.1

# セキュリティ更新を含むシステムパッケージの更新
RUN apt update && \
    apt upgrade -y && \
    apt install -y --no-install-recommends \
        git \
        bash-completion \
        openssh-client \
        curl \
        xz-utils \
        ca-certificates \
        dumb-init && \
    apt autoremove -y && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*

# 既存のbunユーザーを削除
RUN userdel -r bun || true

# non-rootユーザーの作成（より安全なUID/GID設定）
RUN groupadd -g 1001 appuser && \
    useradd -u 1001 -g appuser -s /bin/bash -m appuser

# 作業ディレクトリの作成と権限設定
RUN mkdir -p /home/appuser/workspace && \
    chown -R appuser:appuser /home/appuser/workspace

# SSHディレクトリの作成と権限設定（より厳格な権限）
RUN mkdir -p /home/appuser/.ssh && \
    chown -R appuser:appuser /home/appuser/.ssh && \
    chmod 700 /home/appuser/.ssh
    # chmod 600 /home/appuser/.ssh/* 2>/dev/null || true

# ユーザーをappuserに変更
USER appuser

# 作業ディレクトリの設定
WORKDIR /home/appuser/workspace

# より安全なデフォルトコマンド
ENTRYPOINT ["dumb-init", "--"]
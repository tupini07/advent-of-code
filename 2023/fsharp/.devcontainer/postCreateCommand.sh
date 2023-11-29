sudo apt update
sudo apt install -yq clang zlib1g-dev

echo 'export PATH="$HOME/.local/bin/:${PATH}"' >> ~/.zshrc
echo 'export PATH="$HOME/.dotnet/:${PATH}"' >> ~/.zshrc
echo 'export PATH="$PATH:/home/vscode/.dotnet/tools"' >> ~/.zshrc

wget https://dot.net/v1/dotnet-install.sh && \
    mkdir -p ~/.local/bin/ && \
    chmod +x dotnet-install.sh && \
    mv dotnet-install.sh ~/.local/bin/ && \
    ~/.local/bin/dotnet-install.sh --channel 8.0

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
echo "# Load nvm path" >> ~/.zshrc
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm' >> ~/.zshrc
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion"' >> ~/.zshrc
source ~/.zshrc && nvm install 21.2.0

npm install -g @go-task/cli
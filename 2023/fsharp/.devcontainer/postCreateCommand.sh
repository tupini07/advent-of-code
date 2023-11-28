sudo apt update
sudo apt install -yq clang zlib1g-dev

echo 'export PATH="$HOME/.local/bin/:${PATH}"' >> ~/.zshrc
echo 'export PATH="$HOME/.dotnet/:${PATH}"' >> ~/.zshrc

echo 'export PATH="$HOME/.local/bin/:${PATH}"' >> ~/.bashrc
echo 'export PATH="$HOME/.dotnet/:${PATH}"' >> ~/.bashrc

wget https://dot.net/v1/dotnet-install.sh && \
    mkdir -p ~/.local/bin/ && \
    chmod +x dotnet-install.sh && \
    mv dotnet-install.sh ~/.local/bin/ && \
    ~/.local/bin/dotnet-install.sh --channel 8.0
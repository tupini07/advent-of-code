(defproject aoc-2021 "0.1.0-SNAPSHOT"
  :description "Advent of code solutions for 2021"
  :url "https://github.com/tupini07/advent-of-code"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [clj-http "3.12.3"]]
  :main ^:skip-aot aoc-2021.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
